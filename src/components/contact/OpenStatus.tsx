'use client';

import React, { useEffect, useState } from 'react';

/** "Open now" / "Closed" badge for Mon–Sat 8:00–18:00 Lagos time. Rendered after mount so it uses the real clock. */
export default function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        weekday: 'short',
        hour: 'numeric',
        hour12: false,
      }).formatToParts(new Date());
      const day = parts.find((p) => p.type === 'weekday')?.value;
      const hour = Number(parts.find((p) => p.type === 'hour')?.value);
      setOpen(day !== 'Sun' && hour >= 8 && hour < 18);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return <span className="inline-block h-6 w-24 rounded-full bg-white/15" />;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider animate-fade-in ${
        open ? 'bg-white text-green-700' : 'bg-white/15 text-white'
      }`}
    >
      <span className="relative flex w-2 h-2">
        {open && <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />}
        <span className={`relative w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-white/60'}`} />
      </span>
      {open ? 'Open now' : 'Closed now'}
    </span>
  );
}
