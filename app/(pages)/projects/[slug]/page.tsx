// app/projects/[slug]/page.tsx
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProjectDetailContent } from '@/components/sections/ProjectDetailContent'; 
import { DetailedProject } from '@/lib/types';


// 1. Static Generation
export async function generateStaticParams() {
  return getAllProjectSlugs();
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | My Portfolio`,
    description: project.shortDescription,
  };
}

// 3. Main Page Component
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); 
  }
  
  const detailedProject = project as DetailedProject; 

// Send the fetched data to the Client Component for rendering
  return (
    <ProjectDetailContent project={detailedProject} />
  );
}