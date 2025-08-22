import { Link } from "react-router-dom";

export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-s border-pastel-border-soft dark:border-neutral-700 ml-3 sm:ml-4">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6 sm:mb-8 ms-5 sm:ms-6">
          <span className="absolute -start-1.5 mt-1.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-pastel-accent ring-4 ring-white dark:ring-neutral-950"></span>
          {/* 제목을 상세페이지로 링크 */}
          <h4 className="font-medium text-sm sm:text-base text-pastel-text-light dark:text-white">
            <Link
              to={`/timeline/${it.slug}`}
              className="underline decoration-transparent hover:decoration-current hover:text-pastel-accent transition"
            >
              {it.title}
            </Link>
          </h4>
          <p className="text-[11px] sm:text-xs text-pastel-text-soft dark:text-neutral-500 font-medium">{it.period} · {it.place}</p>
          <p className="mt-1 text-[13px] sm:text-sm text-pastel-text-medium dark:text-neutral-300 leading-relaxed">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}
