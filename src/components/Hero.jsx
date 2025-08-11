import { FaEnvelope, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Hero({ resume }) {
  const [showEmails, setShowEmails] = useState(false);

  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-[220px,1fr] items-center">
      {/* 사진 */}
      <img
        src={resume.photo}
        alt={`${resume.name} portrait`}
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-2xl object-cover ring-1 ring-neutral-200 dark:ring-neutral-800 shadow mx-auto md:mx-0"
      />

      {/* 텍스트 */}
      <div>
        <h1 className="font-semibold tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
          {resume.name}
        </h1>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          {resume.title} · {resume.location}
        </p>

        <p className="mt-4 sm:mt-6 leading-relaxed text-[15px] sm:text-base">
          {resume.summary}
        </p>

        {/* 하이라이트 */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
          {resume.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] sm:text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700"
            >
              {h}
            </span>
          ))}
        </div>

        {/* 아이콘 영역 */}
        <div className="mt-6 flex gap-4 items-center relative">
          {/* 이메일 아이콘 + 툴팁 */}
          <div
            className="relative"
            onMouseEnter={() => setShowEmails(true)}
            onMouseLeave={() => setShowEmails(false)}
          >
            <FaEnvelope className="text-neutral-600 hover:text-pastel-accent dark:text-neutral-300 text-2xl transition cursor-pointer" />

            {showEmails && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 text-sm rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 px-4 py-2 whitespace-nowrap z-10">
                <p>{resume.email1}</p>
                <p>{resume.email2}</p>
              </div>
            )}
          </div>

          {/* GitHub 아이콘 */}
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 페이지"
           className="text-neutral-600 hover:text-pastel-accent dark:text-neutral-300 text-2xl transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
