import { experiences, isOngoingPeriod } from "@/lib/data";

function CurrentBadge() {
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-md border border-[var(--mac-status)]/45 bg-[var(--mac-status)]/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--mac-status)] sm:text-[11px]"
      title="Current role"
    >
      Current
    </span>
  );
}

/** Badge after title when period ends with "– Present" (any such role). */
function ExperienceTitle({ title, period }: { title: string; period: string }) {
  if (isOngoingPeriod(period)) {
    return (
      <>
        <span>{title}</span>
        <CurrentBadge />
      </>
    );
  }
  return <>{title}</>;
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-[400ms] duration-700 fill-mode-both sm:pt-10"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
      >
        Experience
      </h2>
      <div className="relative mb-5 space-y-8 border-l border-[var(--mac-window-border)]">
        {experiences.map((exp, index) => {
          const current = isOngoingPeriod(exp.period);
          return (
            <div
              key={`${exp.title}-${exp.period}-${index}`}
              className="relative pl-6"
            >
              <div
                className={`absolute -left-px top-1 size-2 -translate-x-1/2 rounded-full ${current ? "bg-[var(--mac-status)] shadow-[0_0_0_3px] shadow-[var(--mac-status)]/20" : "bg-[var(--mac-muted)]"}`}
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="flex flex-wrap items-center gap-2 text-sm font-bold text-[var(--mac-fg)] sm:text-base">
                  <ExperienceTitle title={exp.title} period={exp.period} />
                </h3>
                <span className="text-xs text-[var(--mac-muted)] sm:text-sm">
                  {exp.period}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--mac-muted)] sm:text-sm">
                <span className="font-medium text-[var(--mac-fg)]">
                  {exp.company}
                </span>
                <span aria-hidden>•</span>
                <span>{exp.location}</span>
              </div>
              <ul
                className="mt-3 space-y-2 text-xs text-[var(--mac-muted)] sm:text-sm"
                role="list"
              >
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--mac-muted)]/40"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
