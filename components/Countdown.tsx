'use client';

import { useEffect, useMemo, useState } from 'react';

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft {
  const distance = new Date(targetDate).getTime() - new Date().getTime();
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  const items = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds }
    ],
    [timeLeft]
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" aria-live="polite">
      {items.map((item) => (
        <div key={item.label} className="rounded-md border border-gold/30 bg-cream/70 p-6 text-center">
          <p className="font-serif text-4xl text-charcoal">{item.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cocoa">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
