export default function Timeline({ items=[] }) {
  return (
    <ol className="relative border-s border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-4">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6 sm:mb-8 ms-5 sm:ms-6">
          <span className="absolute -start-1.5 mt-1.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-neutral-400 ring-4 ring-white dark:ring-neutral-950"></span>
          <h4 className="font-medium text-sm sm:text-base">{it.title}</h4>
          <p className="text-[11px] sm:text-xs text-neutral-500">{it.period} · {it.place}</p>
          <p className="mt-1 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}
