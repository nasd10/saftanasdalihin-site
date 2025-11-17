"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="block h-full"
    >
      <motion.article 
        className="rounded-lg border border-border overflow-hidden bg-background h-full shadow-sm transition-shadow duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Konten Card di dalam <article> */}
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
            <span className="text-primary underline">
                View Details
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}