// Profile, repo and all-time contribution numbers for the about page's GitHub
// section, cached for a day so visitors never hit GitHub's rate limit.
const USERNAME = "vineet-panchal";

export const revalidate = 86400;

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
};

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "User-Agent": "vineetpanchal-portfolio",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, next: { revalidate } });
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return res.json();
}

export async function GET() {
  try {
    const [user, repos, contributions] = await Promise.all([
      getJson<{ public_repos: number; followers: number; following: number; created_at: string }>(
        `https://api.github.com/users/${USERNAME}`,
        { headers },
      ),
      getJson<Repo[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`, { headers }),
      getJson<{ total: Record<string, number> }>(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=all`).catch(
        () => null,
      ),
    ]);

    const own = repos.filter((r) => !r.fork);
    const latest = own[0];

    return Response.json({
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      createdAt: user.created_at,
      stars: own.reduce((sum, r) => sum + r.stargazers_count, 0),
      forks: own.reduce((sum, r) => sum + r.forks_count, 0),
      contributions: contributions ? Object.values(contributions.total).reduce((a, b) => a + b, 0) : null,
      contributionsByYear: contributions
        ? Object.entries(contributions.total)
            .map(([year, count]) => ({ year: Number(year), count }))
            .sort((a, b) => a.year - b.year)
        : [],
      latestPush: latest ? { name: latest.name, url: latest.html_url, pushedAt: latest.pushed_at } : null,
      recentRepos: own.slice(0, 3).map((r) => ({ name: r.name, url: r.html_url, language: r.language, pushedAt: r.pushed_at })),
      topRepos: [...own]
        .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at))
        .slice(0, 3)
        .map((r) => ({ name: r.name, url: r.html_url, description: r.description, language: r.language, stars: r.stargazers_count })),
    });
  } catch {
    return Response.json({ error: "GitHub stats unavailable" }, { status: 502 });
  }
}
