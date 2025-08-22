import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-pastel-border-soft dark:border-neutral-700 hover:-translate-y-1 hover:shadow-md transition duration-200 touch-manipulation bg-pastel-card-soft dark:bg-neutral-900">
      <a href={project.link} target="_blank" rel="noreferrer"
        className="block"
        aria-label={`${project.title} を開く`}>
        <div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img src={project.thumbnail} alt={`${project.title} thumbnail`}
               className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" loading="lazy" />
        </div>
      </a>
      
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-pastel-text-light dark:text-white">{project.title}</h3>
        
        {/* 개발 기간 표시 */}
        {project.period && (
          <div className="flex items-center gap-2 mt-1 mb-2">
            <FaCalendarAlt className="text-xs text-pastel-accent" />
            <span className="text-[11px] sm:text-xs text-pastel-accent font-medium">
              {project.period}
            </span>
          </div>
        )}
        
        <p className="text-[13px] sm:text-sm text-pastel-text-medium dark:text-neutral-300 line-clamp-2 mt-1 font-medium">
          {project.description}
        </p>
        
        {/* 세부설명 추가 - 모바일 가독성 향상 */}
        {project.description_detail && (
          <p className="text-[12px] sm:text-[13px] text-pastel-text-soft dark:text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
            {project.description_detail}
          </p>
        )}
        
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-pastel-text-medium dark:text-neutral-300 font-medium">{t}</span>
          ))}
        </div>
        
        {/* 링크 버튼들 */}
        <div className="mt-4 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-pastel-text-medium dark:text-neutral-300 font-medium"
              aria-label="GitHub リポジトリを開く"
            >
              <FaGithub className="text-sm" />
              GitHub
            </a>
          )}
          
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-pastel-accent hover:bg-pastel-accent/90 text-white transition-colors font-medium"
            aria-label="プロジェクトサイトを開く"
          >
            <FaExternalLinkAlt className="text-sm" />
            サイトを見る
          </a>
        </div>
      </div>
    </div>
  );
}
