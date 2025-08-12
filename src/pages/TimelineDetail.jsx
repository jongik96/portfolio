import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import resume from "../data/resume";

export default function TimelineDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = resume.timeline.find(t => t.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!item) {
    // 잘못된 슬러그면 홈으로
    navigate("/", { replace: true });
    return null;
  }

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
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{item.desc}</p>
      </div>

      {/* 상세 내용 */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">What I did / Learned</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            {item.details?.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="mt-8 flex justify-between">
        <Link to="/" className="underline hover:text-pastel-accent">← Back to Home</Link>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="underline hover:text-pastel-accent">Back to top ↑</a>
      </div>
    </section>
  );
}
