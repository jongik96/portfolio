import { FaEnvelope, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Hero({ resume = {} }) {
  const [showEmails, setShowEmails] = useState(false);

  const highlights = Array.isArray(resume.highlights) ? resume.highlights : [];
  const email1 = resume.email1 || resume.email || ""; // 하나만 있을 때도 대응
  const email2 = resume.email2 || "";

  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-[220px,1fr] items-center">
      <img
        src={resume.photo || "/me.jpg"}
        alt={`${resume.name || ""} portrait`}
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-2xl object-cover ring-1 ring-neutral-200 dark:ring-neutral-800 shadow mx-auto md:mx-0"
      />

      <div>
        <h1 className="font-semibold tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
          {resume.name || "パク・ジョンイク ( Park Jong Ik )"}
        </h1>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          {(resume.title || "Frontend Engineer")} · {(resume.location || "Kyoto, Japan")}
        </p>

        <p className="mt-4 sm:mt-6 leading-relaxed text-[15px] sm:text-base">
          {resume.summary || "（パク・ジョンイク）と申します。私は、着実に成長するフロントエンド開発者になるために、毎日短い時間でも学習を続け、復習や新しい知識の習得に時間を投資しています。また、複数回のプロジェクト経験を通じて、UI/UXを意識した開発や、バックエンド開発者・Webデザイナーなど多様なメンバーとの協働の重要性を身をもって実感しました。その中で、JiraやGitなどのツール理解を深め、円滑なコミュニケーションの重要性も常に意識しています。React、Next.js、TypeScriptを用いた開発を得意としており、AWS,Linux Languageを活用したインフラ構築の経験も豊富にあります。"}
        </p>

        {/* 하이라이트 */}
        {highlights.length > 0 && (
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
            {highlights.map((h, i) => (
              <span
                key={`${h}-${i}`}
                className="text-[11px] sm:text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {/* 아이콘 영역 */}
        <div className="mt-6 flex gap-4 items-center relative">
          {/* 이메일(툴팁) */}
          {(email1 || email2) && (
            <div
              className="relative"
              onMouseEnter={() => setShowEmails(true)}
              onMouseLeave={() => setShowEmails(false)}
            >
              <FaEnvelope className="text-neutral-600 hover:text-pastel-accent dark:text-neutral-300 text-2xl transition cursor-pointer" />
              {showEmails && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 text-sm rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 px-4 py-2 whitespace-nowrap z-10">
                  {email1 && <p>{email1}</p>}
                  {email2 && <p>{email2}</p>}
                </div>
              )}
            </div>
          )}

          {/* GitHub */}
          {resume.github && (
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 페이지"
              className="text-neutral-600 hover:text-pastel-accent dark:text-neutral-300 text-2xl transition"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
