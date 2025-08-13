// src/pages/TimelineDetail.jsx
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import resume from "../data/resume";

export default function TimelineDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = resume?.timeline?.find(t => t.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!item) {
    navigate("/", { replace: true });
    return null;
  }

  // details: 문자열/객체 모두 지원
  const details = Array.isArray(item.details)
    ? item.details.map(d => (typeof d === "string" ? { text: d } : d))
    : [];

  return (
    <section className="container py-12 sm:py-16 md:py-24">
      {/* 브레드크럼 */}
      <nav className="text-sm mb-6 text-neutral-500">
        <Link to="/" className="hover:text-pastel-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/#timeline" className="hover:text-pastel-accent">Timeline</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700 dark:text-neutral-300">{item.title}</span>
      </nav>

      {/* 헤더 카드 */}
      <div className="bg-white rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{item.title}</h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {item.period} · {item.place}
        </p>
        {item.desc && <p className="mt-4 text-neutral-700 dark:text-neutral-300">{item.desc}</p>}
        {item.desc_detail && <p className="mt-4 text-neutral-700 dark:text-neutral-300">{item.desc_detail}</p>}
      </div>

      {/* 상세 내용 */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">What I did / Learned</h2>

          <ul className="space-y-3">
            {details.map((d, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-3"
              >
                <p className="text-neutral-700 dark:text-neutral-300">{d.text}</p>

                {/* 깃허브 링크(옵션) — d.github: string | string[] 지원 */}
                {d.github && (
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(d.github) ? d.github : [d.github]).map((url, idx) => (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-pastel-accent/20 transition text-sm"
                      >
                        <FaGithub className="text-base" />
                        <span>GitHub</span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* 항목 외에 추가 레포 전체 목록이 있으면 (옵션) */}
          {Array.isArray(item.repos) && item.repos.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium mb-2">関連リポジトリ</h3>
              <div className="flex flex-wrap gap-2">
                {item.repos.map((r, idx) => (
                  <a
                    key={idx}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-pastel-accent/20 transition text-sm"
                    aria-label={`GitHub: ${r.label}`}
                  >
                    <FaGithub className="text-base" />
                    <span>{r.label || "GitHub"}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link to="/" className="underline hover:text-pastel-accent">← Back to Home</Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="underline hover:text-pastel-accent"
        >
          Back to top ↑
        </button>
      </div>
    </section>
  );
}
