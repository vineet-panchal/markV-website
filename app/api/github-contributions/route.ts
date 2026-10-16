// Proxies the public GitHub contributions calendar so the homepage heatmap
// gets cached data from our own origin instead of a third-party call per visit.
const USERNAME = "vineet-panchal";

export const revalidate = 86400;

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate } },
    );
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);
    return Response.json(await res.json());
  } catch {
    return Response.json({ error: "Contributions unavailable" }, { status: 502 });
  }
}
