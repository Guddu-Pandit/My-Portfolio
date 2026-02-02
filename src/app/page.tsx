import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { SiX } from "react-icons/si";
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
