import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Code2,
  Briefcase,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSupabase,
  SiX,
} from "react-icons/si";
import Link from "next/link";

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
            <nav className="flex items-center gap-1" aria-label="Main">
              <Link
                href="#about"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Skills
              </Link>
              <Link
                href="#tools"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Tools
              </Link>
              <Link
                href="#experience"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 sm:py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden />
            Full-Stack Developer
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Guddu Kumar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Building reliable and scalable web applications with clean code and
            thoughtful architecture.
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

      {/* About */}
      <section
        id="about"
        className="px-6 py-16 sm:py-20"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="about-heading"
            className="flex items-center gap-2 text-xl font-semibold text-foreground"
          >
            <Code2 className="size-5 text-primary" aria-hidden />
            About
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I build web applications with a focus on maintainability and
            performance. I prioritize clean code, clear structure, and
            thoughtful problem-solving. My work spans frontend interfaces,
            backend logic, and database design—delivering features that work
            reliably in production.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 py-16 sm:py-20"
        aria-labelledby="skills-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="skills-heading"
            className="mb-6 text-xl font-semibold text-foreground"
          >
            Skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-primary">
                Frontend
              </dt>
              <dd className="mt-2 text-muted-foreground">
                React, Next.js, Tailwind CSS, HTML, CSS, JavaScript
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-primary">
                Backend
              </dt>
              <dd className="mt-2 text-muted-foreground">
                Supabase, REST APIs, Authentication &amp; Authorization
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-primary">
                Database &amp; Tools
              </dt>
              <dd className="mt-2 text-muted-foreground">
                PostgreSQL, Git, GitHub, Vercel
              </dd>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="px-6 py-16 sm:py-20"
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
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Next.js"
            >
              <SiNextdotjs className="size-10" aria-hidden />
              <span className="text-sm font-medium">Next.js</span>
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="React"
            >
              <SiReact className="size-10" aria-hidden />
              <span className="text-sm font-medium">React</span>
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="TypeScript"
            >
              <SiTypescript className="size-10" aria-hidden />
              <span className="text-sm font-medium">TypeScript</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="JavaScript"
            >
              <SiJavascript className="size-10" aria-hidden />
              <span className="text-sm font-medium">JavaScript</span>
            </a>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              title="Supabase"
            >
              <SiSupabase className="size-10" aria-hidden />
              <span className="text-sm font-medium">Supabase</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-16 sm:py-20"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="experience-heading"
            className="flex items-center gap-2 text-xl font-semibold text-foreground"
          >
            <Briefcase className="size-5 text-primary" aria-hidden />
            Experience
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              Admin panels and dashboards for internal tools
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              Bug fixing, testing, and quality assurance
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              Mobile optimization and responsive design
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              API integration and data handling
            </li>
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-16 sm:py-20" aria-labelledby="highlights-heading">
        <div className="mx-auto max-w-3xl">
          <h2
            id="highlights-heading"
            className="mb-6 text-xl font-semibold text-foreground"
          >
            Highlights
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Login redirect bug fix — resolved flow and session handling</li>
            <li>QR verification testing and fixes — end-to-end validation</li>
            <li>Revenue calculation issue resolution — correct data logic</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-16 sm:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="contact-heading"
            className="text-xl font-semibold text-foreground"
          >
            Contact
          </h2>
          <nav
            className="mt-6 flex flex-wrap gap-6"
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
