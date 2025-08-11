export default function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer"
      className="group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 hover:shadow-md transition duration-200 touch-manipulation"
      aria-label={project.title}>
      <div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img src={project.thumbnail} alt={`${project.title} thumbnail`}
             className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" loading="lazy" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base">{project.title}</h3>
        <p className="text-[13px] sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-1">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
