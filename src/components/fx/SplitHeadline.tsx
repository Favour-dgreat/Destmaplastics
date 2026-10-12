import React from 'react';

interface SplitHeadlineProps {
  /** Each entry renders on its own line. Wrap a word in *asterisks* to colour it green. */
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Headline whose words rise up out of a mask one after another on page load. */
export default function SplitHeadline({ lines, className = '', delay = 100, stagger = 70 }: SplitHeadlineProps) {
  let index = 0;

  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((raw, wi) => {
            const highlight = raw.startsWith('*') && raw.endsWith('*');
            const word = highlight ? raw.slice(1, -1) : raw;
            const d = delay + index++ * stagger;
            return (
              <span key={wi} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.24em] last:mr-0">
                <span
                  className={`word-rise ${highlight ? 'text-green-400' : ''}`}
                  style={{ animationDelay: `${d}ms` }}
                >
                  {word}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
