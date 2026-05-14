import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

type MacShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function MacShell({ children, className }: MacShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-[var(--mac-desktop)] px-3 py-4 sm:px-4 sm:py-6",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-4xl">
        <div
          className={cn(
            "overflow-hidden rounded-lg border border-[var(--mac-window-border)]",
            "bg-[var(--mac-window-bg)]",
          )}
        >
          <div
            className={cn(
              "flex h-10 shrink-0 items-center justify-between border-b border-[var(--mac-window-border)]",
              "bg-[var(--mac-titlebar-bg)] px-3",
            )}
          >
            <div className="flex items-center gap-2 pl-1" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <ThemeToggle className="size-8 rounded-md border-0 bg-transparent text-[var(--mac-muted)] shadow-none hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]" />
          </div>
          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
