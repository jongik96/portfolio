export default function LanguageSkills({ languageSkills = [] }) {
  if (!languageSkills || languageSkills.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {languageSkills.map((skill, index) => (
        <div
          key={index}
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold">{skill.language}</h3>
              <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                {skill.level}
              </span>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {skill.experience}
            </div>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
}
