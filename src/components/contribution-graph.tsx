const WEEKS = 52;
const DAYS = 7;

function levelForCell(week: number, day: number): number {
  const n = Math.sin(week * 12.9898 + day * 78.233 + 42) * 43758.5453;
  const t = n - Math.floor(n);
  if (t < 0.55) return 0;
  if (t < 0.72) return 1;
  if (t < 0.86) return 2;
  if (t < 0.94) return 3;
  return 4;
}

const levelClass: Record<number, string> = {
  0: "bg-[var(--contrib-0)]",
  1: "bg-[var(--contrib-1)]",
  2: "bg-[var(--contrib-2)]",
  3: "bg-[var(--contrib-3)]",
  4: "bg-[var(--contrib-4)]",
};

export function ContributionGraph() {
  let total = 0;
  const cells: { week: number; day: number; level: number }[] = [];
  for (let d = 0; d < DAYS; d++) {
    for (let w = 0; w < WEEKS; w++) {
      const level = levelForCell(w, d);
      if (level > 0) total += level;
      cells.push({ week: w, day: d, level });
    }
  }
  const approx = 1200 + (total % 800);

  return (
    <section
      className="border-t border-[var(--mac-window-border)] pt-8 sm:pt-10"
      aria-label="Activity contribution graph"
    >
      <p className="mb-4 text-sm text-[var(--mac-muted)]">
        {approx.toLocaleString()} contributions in the last year
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <div
          className="flex shrink-0 flex-col justify-between py-0.5 pr-1 text-[10px] leading-none text-[var(--mac-muted)]"
          aria-hidden
        >
          <span className="h-3" />
          <span className="flex h-3 items-center">Mon</span>
          <span className="h-3" />
          <span className="flex h-3 items-center">Wed</span>
          <span className="h-3" />
          <span className="flex h-3 items-center">Fri</span>
          <span className="h-3" />
        </div>
        <div
          className="grid min-w-0 gap-px"
          style={{
            gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))`,
          }}
        >
          {cells.map(({ week, day, level }) => (
            <span
              key={`${week}-${day}`}
              title={`week ${week + 1}, day ${day + 1}`}
              className={`size-2.5 rounded-[2px] sm:size-3 ${levelClass[level]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
