"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useId, useState } from "react";
import { experiences } from "@/lib/data";
import { Button } from "@/components/ui/button";

function isOngoingPeriod(period: string) {
  return /[–—-]\s*Present\s*$/i.test(period.trim());
}

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
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visible = expanded ? experiences : experiences.slice(0, 1);
  const canToggle = experiences.length > 1;

  return (
    <section
      id="experience"
      className="border-t border-[var(--mac-window-border)] pt-8 sm:pt-10"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
      >
        Experience
      </h2>
      <div id={listId} className="mb-5 space-y-8">
        {visible.map((exp, index) => (
          <div
            key={`${exp.title}-${exp.period}-${index}`}
            className="relative border-l border-[var(--mac-window-border)] pl-6"
          >
            <div
              className="absolute -left-px top-1 size-2 -translate-x-1/2 rounded-full bg-[var(--mac-status)]"
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
        ))}
      </div>
      {canToggle ? (
        <div className="flex mb-5 justify-center">
          <Button
            type="button"
            variant="outline"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-2 rounded-lg border-[var(--mac-window-border)] bg-transparent font-mono text-[var(--mac-fg)] hover:bg-[var(--mac-elevated)]"
          >
            {expanded ? (
              <>
                Show less
                <ChevronUp className="size-4" aria-hidden />
              </>
            ) : (
              <>
                Show more
                <ChevronDown className="size-4" aria-hidden />
              </>
            )}
          </Button>
        </div>
      ) : null}
    </section>
  );
}
