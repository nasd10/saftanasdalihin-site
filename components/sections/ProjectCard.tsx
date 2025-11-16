"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-border overflow-hidden bg-background">
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4 h-16 line-clamp-3 overflow-hidden">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <Link href={project.liveUrl ?? '#'} className="text-primary underline">
            View Live Project
          </Link>
        </div>
      </div>
    </article>
  );
}