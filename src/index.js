import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import resume from "./data/resume";
import projects from "./data/projects";

function App(){
  return (
    <div>
      <header className="sticky top-0 z-50 header-blur backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800/60 safe-top">
        <div className="container flex items-center justify-between h-14">
          <a href="#" className="font-semibold tracking-tight">Park.dev</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <button className="md:hidden w-10 h-10 rounded-lg border border-neutral-300 dark:border-neutral-700" onClick={()=> {
            const m = document.getElementById('mnav'); m.hidden = !m.hidden;
          }}>☰</button>
        </div>
        <nav id="mnav" hidden className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="container py-2">
            <a href="#about" className="block py-3">About</a>
            <a href="#projects" className="block py-3">Projects</a>
            <a href="#contact" className="block py-3">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="about" className="container py-12 sm:py-16 md:py-24">
          <Hero resume={resume} />
        </section>

        <section id="timeline" className="container py-6 sm:py-10 md:py-12">
          <Timeline items={resume.timeline} />
        </section>

        <section id="projects" className="container py-12 sm:py-16 md:py-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        <section id="contact" className="container py-12 sm:py-16 md:py-24">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              이메일: <a className="underline" href="pji3503@gmail.com">pji3503@gmail.com</a> ·  <a className="underline" href="pji3504@naver.com">pji3504@naver.com</a>
              <br/>GitHub: <a className="underline" href="https://github.com/jongik96">jongik96</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="container py-8 sm:py-10 text-xs sm:text-sm text-neutral-500 safe-bottom">
        © {new Date().getFullYear()} Park JongIk. All rights reserved.
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
