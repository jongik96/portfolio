import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container py-24">
      <div className="bg-white rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 text-center">
        <h1 className="text-3xl font-semibold mb-2">404</h1>
        <p className="text-neutral-600 dark:text-neutral-400">페이지를 찾을 수 없어요.</p>
        <Link to="/" className="mt-6 inline-block underline hover:text-pastel-accent">Go Home</Link>
      </div>
    </section>
  );
}
