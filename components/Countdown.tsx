"use client";

import { useEffect, useState } from "react";

// Deadline: Oct 3 2026 at 23:59:00 Costa Rica time (UTC-6)
const DEADLINE = new Date("2026-10-04T05:59:00Z"); // 23:59 CR = 05:59 UTC next day

function getTimeLeft() {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { hours, minutes, seconds, total: diff };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
        <p className="text-red-700 font-semibold text-sm">
          ⏰ El tiempo para votar ha terminado
        </p>
      </div>
    );
  }

  const isUrgent = time.total < 1000 * 60 * 60 * 3; // less than 3 hours

  return (
    <div
      className={`rounded-2xl p-4 text-center border ${
        isUrgent
          ? "bg-red-50 border-red-200"
          : "bg-tamarindo-50 border-tamarindo-200"
      }`}
    >
      <p
        className={`text-xs font-medium mb-2 uppercase tracking-wide ${
          isUrgent ? "text-red-500" : "text-tamarindo-600"
        }`}
      >
        ⏰ Tiempo para votar · Cierre 3 Oct 23:59
      </p>
      <div className="flex items-center justify-center gap-3">
        <TimeBox value={time.hours} label="horas" urgent={isUrgent} />
        <span className={`text-2xl font-bold ${isUrgent ? "text-red-400" : "text-tamarindo-400"}`}>:</span>
        <TimeBox value={time.minutes} label="minutos" urgent={isUrgent} />
        <span className={`text-2xl font-bold ${isUrgent ? "text-red-400" : "text-tamarindo-400"}`}>:</span>
        <TimeBox value={time.seconds} label="segundos" urgent={isUrgent} />
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
  urgent,
}: {
  value: number;
  label: string;
  urgent: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-3xl font-black tabular-nums w-14 text-center ${
          urgent ? "text-red-700" : "text-tamarindo-800"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs text-gray-500 mt-0.5">{label}</span>
    </div>
  );
}
