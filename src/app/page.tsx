import { ExperienceSection } from "@/components/experience-section";
import { GitHubContributions } from "@/components/github-contributions";
import { MacShell } from "@/components/mac-shell";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  BadgeCheck,
  FolderCode,
} from "lucide-react";
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
import { hasCurrentExperience, projects, techAccentColor } from "@/lib/data";
import { Button } from "@/components/ui/button";

function PineconeIcon({
  className,
  ...rest
}: {
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 750 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M471.826 24.0936C464.116 14.9134 450.95 12.5551 440.534 18.4886L430.803 24.0322L430.679 24.0093L430.659 24.1139L325.85 83.8204L350.42 126.977L418.874 87.9814L402.035 179.236L450.859 188.251L467.791 96.4974L518.212 156.532L556.227 124.585L479.472 33.1965L479.503 33.0244L479.295 32.9859L471.826 24.0936ZM324.08 794.824C349.328 794.824 369.795 774.868 369.795 750.25C369.795 725.633 349.328 705.676 324.08 705.676C298.833 705.676 278.366 725.633 278.366 750.25C278.366 774.868 298.833 794.824 324.08 794.824ZM385.561 550.209L369.091 642.069L320.221 633.302L336.586 542.025L268.375 581.205L243.651 538.136L348.033 478.18L348.056 478.049L348.212 478.077L358.011 472.449C368.389 466.488 381.541 468.781 389.29 477.903L396.851 486.803L396.926 486.816L396.915 486.879L474.358 578.039L436.524 610.2L385.561 550.209ZM425.11 330.935L408.652 422.737L359.782 413.971L376.085 323.035L308.091 361.894L283.461 318.771L387.51 259.306L387.617 258.708L388.331 258.836L397.847 253.398C408.224 247.468 421.351 249.774 429.086 258.887L436.356 267.451L436.487 267.475L436.467 267.583L513.866 358.765L476.019 390.91L425.11 330.935ZM104.667 693.368L104.394 693.554L104.171 693.225L94.0456 690.317C83.3324 687.24 76.2404 677.074 77.0484 665.954L86.0484 542.094L133.05 545.511L127.574 620.869L200.8 571.19L227.251 610.203L155.455 658.912L228.701 679.952L215.694 725.26L104.667 693.368ZM590.296 744.836L590.301 744.844L590.291 744.852L586.988 755.721C583.802 766.205 573.813 773.109 562.883 772.383L552.56 771.698L551.9 772.167L551.517 771.629L436.444 763.986L439.566 716.95L516.258 722.044L466.25 651.718L504.651 624.395L555.789 696.309L577.921 623.484L623.009 637.195L590.296 744.836ZM725.177 489.19L725.322 489.215L725.29 489.393L730.774 499.22C736.394 509.291 734.104 521.931 725.309 529.389L717.018 536.42L716.96 536.747L716.688 536.699L627.257 612.532L596.06 575.717L654.901 525.823L566.796 510.314L575.158 462.783L663.903 478.404L626.686 411.712L668.814 388.189L725.177 489.19ZM634.493 282.027L554.909 324.863L532.047 282.364L610.263 240.264L538.372 211.176L556.464 166.435L665.478 210.544L665.964 210.283L666.279 210.868L676.146 214.861C686.737 219.146 692.871 230.276 690.839 241.522L688.81 252.753L688.826 252.782L688.802 252.795L668.319 366.171L620.841 357.589L634.493 282.027ZM100.963 381.58L189.25 396.607L181.156 444.185L92.111 429.029L130.083 495.958L88.1229 519.778L30.7057 418.577L30.665 418.57L30.6735 418.52L25.1727 408.825C19.4828 398.796 21.6815 386.142 30.4207 378.621L38.6678 371.524L38.7583 370.992L39.1988 371.067L127.517 295.067L158.982 331.653L100.963 381.58ZM234.324 175.801L293.072 241.268L257.168 273.506L197.06 206.523L183.065 282.822L135.61 274.113L156.332 161.138L156.228 161.021L156.379 160.886L158.474 149.463C160.507 138.378 169.941 130.177 181.199 129.708L191.582 129.276L192.131 128.783L192.539 129.236L310.473 124.33L312.478 172.55L234.324 175.801Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ToolIcon({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  color: string;
}) {
  return (
    <div
      className="group flex flex-col items-center gap-2 p-2"
      style={{ "--tool-color": color } as React.CSSProperties}
      title={label}
    >
      <Icon
        aria-hidden
        className="size-9 text-[var(--mac-muted)] transition-colors duration-300 group-hover:[color:var(--tool-color)] sm:size-10"
      />
      <span className="text-xs font-medium text-[var(--mac-muted)] transition-colors duration-300 group-hover:text-[var(--mac-fg)]">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const isEmployed = hasCurrentExperience();

  return (
    <MacShell>
      {/* Profile: header row (avatar + meta), full-width bio below — aligned with reference layout */}
      <section className="animate-in fade-in slide-in-from-bottom-4 mb-5 flex flex-col gap-8 duration-700 fill-mode-both sm:gap-10">
        <div className="flex flex-row items-start gap-4 sm:gap-8">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-[var(--mac-status)] to-transparent opacity-40 blur-sm"
              aria-hidden
            />
            <Image
              src="https://github.com/Guddu-Pandit.png"
              alt="Guddu Kumar"
              width={96}
              height={96}
              className="relative size-20 rounded-lg border border-[var(--mac-window-border)] object-cover transition-transform duration-300 hover:scale-105 sm:size-24"
              priority
            />
          </div>
          <div className="min-w-0 flex-1 space-y-0">
            <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-[var(--mac-fg)] sm:text-2xl">
              Guddu Kumar
              <BadgeCheck
                className="size-5 text-[var(--mac-status)] sm:size-6"
                aria-label="Verified"
              />
            </h1>
            <p className="mt-1 text-sm text-[var(--mac-muted)] sm:text-base">
              Full-Stack Developer
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-[var(--mac-muted)] sm:text-sm">
              <span
                className={`status-dot ${isEmployed ? "status-dot--employed" : "status-dot--unemployed"}`}
                aria-hidden
              />
              <span className="text-[var(--mac-fg)]">status:</span>{" "}
              {isEmployed ? "employed" : "unemployed"}
            </p>
          </div>
        </div>
        <div className="w-full min-w-0 space-y-4 text-sm leading-relaxed text-[var(--mac-fg)]/90 sm:text-[15px]">
          <p>
            I&apos;m Guddu Kr. Pandit, a passionate full-stack developer who
            loves building intuitive and powerful web applications.I enjoy combining clean UI design with efficient backend logic to
            create experiences that are useful, user-friendly, and modern.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-100 duration-700 fill-mode-both sm:pt-10"
        aria-labelledby="tools-heading"
      >
        <h2
          id="tools-heading"
          className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
        >
          Tools
        </h2>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-5">
          <ToolIcon icon={SiNextdotjs} label="Next.js" color="var(--mac-fg)" />
          <ToolIcon icon={SiReact} label="React" color="#61DAFB" />
          <ToolIcon icon={SiTypescript} label="TypeScript" color="#3178C6" />
          <ToolIcon icon={SiJavascript} label="JavaScript" color="#F7DF1E" />
          <ToolIcon icon={SiSupabase} label="Supabase" color="#3ECF8E" />
          <ToolIcon icon={PineconeIcon} label="Pinecone" color="var(--mac-fg)" />
          <ToolIcon icon={SiGit} label="Git" color="#F05032" />
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-200 duration-700 fill-mode-both sm:pt-10"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
        >
          Projects
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {projects.slice(0, 4).map((project) => (
            <li key={project.name}>
              <article className="card-hover group relative flex h-full flex-col rounded-lg border border-dashed border-[var(--mac-window-border)] bg-[var(--mac-elevated)]/40 p-4 hover:border-[var(--mac-muted)]/40 hover:bg-[var(--mac-elevated)]/80 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[var(--mac-window-border)] bg-[var(--mac-window-bg)] text-[var(--mac-muted)]">
                      <FolderCode className="size-4" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--mac-fg)] sm:text-base">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring shrink-0 rounded-md p-1.5 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-window-bg)] hover:text-[var(--mac-fg)]"
                    title={`Open ${project.name}`}
                  >
                    <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </a>
                </div>
                <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-[var(--mac-muted)] sm:text-sm">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded border border-[var(--mac-window-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--mac-muted)] sm:text-xs">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: techAccentColor(project.tech) }}
                      aria-hidden
                    />
                    {project.tech}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1 text-[10px] font-medium text-[var(--mac-status)] underline decoration-[var(--mac-status)]/30 underline-offset-2 transition-colors hover:decoration-[var(--mac-status)] sm:text-xs"
                  >
                    GitHub
                    <ExternalLink className="size-3" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-6 mb-5 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-[var(--mac-window-border)] bg-transparent font-mono text-[var(--mac-fg)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--mac-elevated)]"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View all projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <GitHubContributions />

      <ExperienceSection />

      {/* Contact / footer */}
      <footer
        id="contact"
        className="animate-in fade-in flex flex-col items-center justify-between gap-4 border-t border-[var(--mac-window-border)] pt-8 text-xs text-[var(--mac-muted)] duration-700 sm:flex-row sm:pt-10"
      >
        <span>© 2026 Guddu Kumar</span>
        <nav className="flex items-center gap-5" aria-label="Contact links">
          <a
            href="mailto:guddukrp7661@gmail.com"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="Email"
          >
            <Mail className="size-5" aria-hidden />
          </a>
          <a
            href="https://github.com/Guddu-Pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="GitHub"
          >
            <Github className="size-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/guddu-pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="LinkedIn"
          >
            <Linkedin className="size-5" aria-hidden />
          </a>
          <a
            href="https://x.com/guddukrpandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="X"
          >
            <SiX className="size-5" aria-hidden />
          </a>
        </nav>
      </footer>
    </MacShell>
  );
}
