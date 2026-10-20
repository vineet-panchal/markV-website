import React from "react";
import { CircuitDate } from "./eras";

const BLANK: CircuitDate = { month: "---", day: "--", year: "----" };

// One LED readout: the lit value sits over faint "8"s, like unlit segments.
function Readout({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-(family-name:--font-geist-mono) text-[9px] tracking-[0.25em] text-zinc-500">{label}</span>
      <div className="relative rounded-md border border-black/60 bg-[#0b0b0c] px-3 py-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.06)]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-(family-name:--font-geist-mono) text-2xl font-bold tracking-[0.18em] opacity-[0.07] sm:text-3xl"
          style={{ color }}
        >
          {"8".repeat(value.length)}
        </span>
        <span
          className="relative font-(family-name:--font-geist-mono) text-2xl font-bold tabular-nums tracking-[0.18em] sm:text-3xl"
          style={{ color, textShadow: `0 0 6px ${color}, 0 0 16px ${color}99, 0 0 28px ${color}55` }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function CircuitRow({ label, date, color }: { label: string; date: CircuitDate | null; color: string }) {
  const d = date ?? BLANK;
  return (
    <div className="flex flex-col items-center gap-2 py-3">
      <div className="flex items-end gap-2 sm:gap-3">
        <Readout label="MONTH" value={d.month} color={color} />
        <Readout label="DAY" value={d.day} color={color} />
        <Readout label="YEAR" value={d.year} color={color} />
      </div>
      <p
        className="w-full max-w-[19rem] rounded-[3px] py-0.5 text-center font-(family-name:--font-geist-mono) text-[10px] font-bold tracking-[0.3em] text-black/85 shadow-[0_0_14px_-2px_var(--glow)]"
        style={{ backgroundColor: color, ["--glow" as string]: color }}
      >
        {label}
      </p>
    </div>
  );
}

function Screw({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute size-2.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,#8a8a90,#3a3a3f)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.5)] after:absolute after:inset-x-[2px] after:top-1/2 after:h-px after:-translate-y-1/2 after:rotate-45 after:bg-black/60 ${className}`}
    />
  );
}

// The DeLorean's time-circuit unit: a metal faceplate with three LED rows.
export default function TimeCircuits({
  destination,
  present,
  lastDeparted,
  traveling,
}: {
  destination: CircuitDate | null;
  present: CircuitDate | null;
  lastDeparted: CircuitDate | null;
  traveling?: boolean;
}) {
  return (
    <div className="force-dark relative w-full max-w-xl rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#2c2c31_0%,#1c1c20_45%,#141417_100%)] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
      <Screw className="left-2.5 top-2.5" />
      <Screw className="right-2.5 top-2.5" />
      <Screw className="bottom-2.5 left-2.5" />
      <Screw className="bottom-2.5 right-2.5" />

      <div className="rounded-xl border border-black/50 bg-[linear-gradient(180deg,#19191c,#111113)] px-6 pb-2 pt-3 shadow-[inset_0_1px_10px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <span className="font-(family-name:--font-geist-mono) text-[10px] tracking-[0.3em] text-zinc-400">TIME CIRCUITS</span>
          <span className="flex items-center gap-2 font-(family-name:--font-geist-mono) text-[10px] tracking-[0.2em] text-zinc-500">
            {traveling ? "ENGAGED" : "ONLINE"}
            <span
              className={`size-1.5 rounded-full ${traveling ? "animate-ping bg-[#ff4a3d]" : "animate-pulse bg-[#3dff7a]"}`}
              style={{ boxShadow: `0 0 8px ${traveling ? "#ff4a3d" : "#3dff7a"}` }}
            />
          </span>
        </div>

        <div className="divide-y divide-white/[0.05]">
          <CircuitRow label="DESTINATION TIME" date={destination} color="#ff4a3d" />
          <CircuitRow label="PRESENT TIME" date={present} color="#3dff7a" />
          <CircuitRow label="LAST TIME DEPARTED" date={lastDeparted} color="#ffb21e" />
        </div>
      </div>
    </div>
  );
}
