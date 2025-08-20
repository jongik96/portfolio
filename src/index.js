import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import resume from "./data/resume";
import projects from "./data/projects";

import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import TimelineDetail from "./pages/TimelineDetail";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  return (
    <div>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800/60 safe-top">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="font-semibold tracking-tight">Park.dev</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/#about" className="hover:opacity-70">About</a>
            <a href="/#projects" className="hover:opacity-70">Projects</a>
            <a href="/#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="container py-8 sm:py-10 text-xs sm:text-sm text-neutral-500 safe-bottom">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <section id="about" className="container py-12 sm:py-16 md:py-24">
        <Hero resume={resume} />
      </section>
      <section id="timeline" className="container py-6 sm:py-10 md:py-12">
        <Timeline items={resume.timeline} />
      </section>
      <section id="projects" className="container py-12 sm:py-16 md:py-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">Toy Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
      <section id="contact" className="container py-12 sm:py-16 md:py-24">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact</h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            E-mail : <a className="underline" href="mailto:pji3503@gmail.com">pji3503@gmail.com</a> · 
            GitHub: <a className="underline" href="https://github.com/jongik96">jongik96</a>
          </p>
        </div>
      </section>
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline/:slug" element={<TimelineDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<AppRouter />);
