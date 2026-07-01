"use client";

import { GitHubCalendar } from "react-github-calendar";

const calendarTheme = {
  light: [
    "var(--contrib-0)",
    "var(--contrib-1)",
    "var(--contrib-2)",
    "var(--contrib-3)",
    "var(--contrib-4)",
  ],
  dark: [
    "var(--contrib-0)",
    "var(--contrib-1)",
    "var(--contrib-2)",
    "var(--contrib-3)",
    "var(--contrib-4)",
  ],
};

export function GitHubContributions() {
  return (
    <section
      id="contributions"
      className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-300 duration-700 fill-mode-both sm:pt-10"
      aria-labelledby="contributions-heading"
    >
      <h2
        id="contributions-heading"
        className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
      >
        GitHub Contributions
      </h2>
      <div className="mac-scroll card-hover mb-5 overflow-x-auto rounded-lg border border-dashed border-[var(--mac-window-border)] bg-[var(--mac-elevated)]/40 p-4 text-[var(--mac-muted)] sm:p-5">
        <GitHubCalendar
          username="Guddu-Pandit"
          theme={calendarTheme}
          blockSize={8}
          blockMargin={4}
          fontSize={10}
          showWeekdayLabels
        />
      </div>
    </section>
  );
}
