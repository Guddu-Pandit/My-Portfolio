import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, Github, Linkedin, FileText, ExternalLink, Wrench } from "lucide-react";
import {
  SiX,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Resume-Filter",
    description:
      "Premium AI-powered platform for resume management and analysis. Organize collections, gain deep insights with Google Gemini AI, and discover talent via semantic search and vector embeddings.",
    href: "https://github.com/Guddu-Pandit/Resume-Filter",
    tech: "JavaScript",
  },
  {
    name: "Ecommerce-App",
    description:
      "Next.js based online shopping web application showcasing product listings and interactive UI, deployed live for users to explore a modern e-commerce interface.",
    href: "https://github.com/Guddu-Pandit/Ecommerce-App",
    tech: "TypeScript",
  },
  {
    name: "Rag-App",
    description:
      "A modern Retrieval-Augmented Generation (RAG) chatbot built with Next.js, LangGraph, Pinecone, and Google Gemini. Upload documents to build your knowledge base and chat with AI.",
    href: "https://github.com/Guddu-Pandit/Rag-App",
    tech: "TypeScript",
  },
  {
    name: "AirBnb-bot",
    description:
      "A powerful Slack integration enabling users to search Airbnb listings within Slack, using Playwright to scrape real-time data and return formatted titles, prices, ratings, and direct listing links.",
    href: "https://github.com/Guddu-Pandit/AirBnb-bot",
    tech: "JavaScript",
  },
  {
    name: "Scraping-webpage",
    description:
      "A robust Node.js web scraping tool powered by Playwright & Puppeteer. Designed for high-reliability data extraction from real estate platforms while actively evading antiBot mechanisms.",
    href: "https://github.com/Guddu-Pandit/Scraping-webpage",
    tech: "JavaScript",
  },
  {
    name: "TechStack",
    description:
      "A fast, user-friendly web app for managing documents, enabling users to upload, store, and automatically extract text from PDF and DOCX files.",
    href: "https://github.com/Guddu-Pandit/TechStack",
    tech: "TypeScript",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link
            href="#"
            className="text-lg font-semibold text-foreground hover:text-foreground/90"
          >
            Guddu Kumar
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="#tools"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Tools
            </Link>
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    
      {/* Hero */}  
      <section className="px-6 py-20 sm:py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Guddu Kumar
          </h1>
          <p className="mt-4 w-full text-lg text-muted-foreground sm:text-xl">
            I'm Guddu Kr. Pandit, a passionate full-stack developer who loves
            building intuitive and powerful web applications. I enjoy combining
            clean UI design with efficient backend logic to create experiences
            that are useful, user-friendly, and modern.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-lg px-6 shadow-sm">
              <a href="mailto:guddukrp7661@gmail.com">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileText className="size-4" aria-hidden />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="border-t border-border/50 px-6 py-16 sm:py-20"
        aria-labelledby="tools-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="tools-heading"
            className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground"
          >
            <Wrench className="size-5 text-primary" aria-hidden />
            Tools
          </h2>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Next.js"
            >
              <SiNextdotjs className="size-10 transition-colors group-hover:text-foreground" aria-hidden />
              <span className="text-sm font-medium">Next.js</span>
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="React"
            >
              <SiReact className="size-10 transition-[color] group-hover:[color:#61DAFB]" aria-hidden />
              <span className="text-sm font-medium">React</span>
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="TypeScript"
            >
              <SiTypescript className="size-10 transition-[color] group-hover:[color:#3178C6]" aria-hidden />
              <span className="text-sm font-medium">TypeScript</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="JavaScript"
            >
              <SiJavascript className="size-10 transition-[color] group-hover:[color:#F7DF1E]" aria-hidden />
              <span className="text-sm font-medium">JavaScript</span>
            </a>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Supabase"
            >
              <SiSupabase className="size-10 transition-[color] group-hover:[color:#3ECF8E]" aria-hidden />
              <span className="text-sm font-medium">Supabase</span>
            </a>
            <a
              href="https://www.pinecone.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Pinecone"
            >
              <Image
                src="/pinecone-icon.svg"
                alt="Pinecone"
                width={40}
                height={40}
                className="size-10 object-contain opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
                aria-hidden
              />
              <span className="text-sm font-medium">Pinecone</span>
            </a>
            <a
              href="https://git-scm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Git"
            >
              <SiGit className="size-10 transition-[color] group-hover:[color:#F05032]" aria-hidden />
              <span className="text-sm font-medium">Git</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-border/50 px-6 py-16 sm:py-20"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            <a
              href="https://github.com/Guddu-Pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              GitHub
            </a>
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2" role="list">
            {projects.map((project) => (
              <li key={project.name}>
                <article className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-border/80 hover:bg-accent/30">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {project.name}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      title={`View ${project.name} on GitHub`}
                    >
                      <Github className="size-5" aria-hidden />
                    </a>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {project.tech}
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:decoration-foreground"
                    >
                      View on GitHub
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-16 sm:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-sm text-muted-foreground">
            © 2026 Guddu Kumar
          </span>
          <nav
            className="flex items-center gap-6"
            aria-label="Contact links"
          >
            <a
              href="mailto:guddukrp7661@gmail.com"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="Email"
            >
              <Mail className="size-5" aria-hidden />
            </a>
            <a
              href="https://github.com/Guddu-Pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="GitHub"
            >
              <Github className="size-5" aria-hidden />
            </a>
            <a
              href="https://www.linkedin.com/in/guddu-pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="LinkedIn"
            >
              <Linkedin className="size-5" aria-hidden />
            </a>
            <a
              href="https://x.com/guddukrpandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="X"
            >
              <SiX className="size-5" aria-hidden />
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
