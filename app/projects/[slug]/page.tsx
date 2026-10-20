import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/projects-page/detail/project-detail';
import { getProject, projects } from '@/lib/projects';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `Vineet Panchal - ${project.title}`,
    description: project.description,
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();

  return (
    <div className="bg-[var(--color-midnight)]">
      <Navbar />
      <ProjectDetail slug={slug} />
      <Footer />
    </div>
  );
}
