import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaArrowLeft, FaCode, FaTrophy, FaLightbulb } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-pastel-text-light dark:text-white mb-4">プロジェクトが見つかりません</h1>
          <Link to="/" className="text-pastel-accent hover:underline">ホームに戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pastel-bg-soft dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 戻るボタン */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-pastel-accent hover:text-pastel-accent/80 transition-colors mb-6"
        >
          <FaArrowLeft className="text-sm" />
          プロジェクト一覧に戻る
        </Link>

        {/* プロジェクトヘッダー */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-pastel-border-soft dark:border-neutral-700 overflow-hidden mb-8">
          <div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <img 
              src={project.thumbnail} 
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-pastel-text-light dark:text-white">
                {project.title}
              </h1>
              
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors text-pastel-text-medium dark:text-neutral-300 font-medium"
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
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-pastel-accent hover:bg-pastel-accent/90 text-white transition-colors font-medium"
                  aria-label="プロジェクトサイトを開く"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  サイトを見る
                </a>
              </div>
            </div>

            {/* 開発期間 */}
            {project.period && (
              <div className="flex items-center gap-2 mb-4">
                <FaCalendarAlt className="text-pastel-accent" />
                <span className="text-pastel-accent font-medium">
                  {project.period}
                </span>
              </div>
            )}

            {/* プロジェクト概要 */}
            <p className="text-pastel-text-medium dark:text-neutral-300 text-lg leading-relaxed mb-6">
              {project.description_detail || project.description}
            </p>

            {/* 技術タグ */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full bg-pastel-accent/10 text-pastel-accent border border-pastel-accent/20 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 詳細セクション */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* プロジェクト概要 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-pastel-border-soft dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pastel-accent/10 flex items-center justify-center">
                <FaLightbulb className="text-pastel-accent text-lg" />
              </div>
              <h2 className="text-xl font-bold text-pastel-text-light dark:text-white">プロジェクト概要</h2>
            </div>
            <div className="text-pastel-text-medium dark:text-neutral-300 leading-relaxed">
              {project.overview || "プロジェクトの詳細な概要がここに表示されます。"}
            </div>
          </div>

          {/* 使用技術 */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-pastel-border-soft dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pastel-accent/10 flex items-center justify-center">
                <FaCode className="text-pastel-accent text-lg" />
              </div>
              <h2 className="text-xl font-bold text-pastel-text-light dark:text-white">使用技術</h2>
            </div>
            <div className="space-y-3">
              {project.technologies?.map((tech, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pastel-accent"></div>
                  <span className="text-pastel-text-medium dark:text-neutral-300">{tech}</span>
                </div>
              )) || (
                <div className="text-pastel-text-medium dark:text-neutral-300">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-pastel-accent"></div>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 成果・学び */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-pastel-border-soft dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pastel-accent/10 flex items-center justify-center">
                <FaTrophy className="text-pastel-accent text-lg" />
              </div>
              <h2 className="text-xl font-bold text-pastel-text-light dark:text-white">成果・学び</h2>
            </div>
            <div className="text-pastel-text-medium dark:text-neutral-300 leading-relaxed">
              {project.achievements || "プロジェクトを通じて得られた成果や学びがここに表示されます。"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

