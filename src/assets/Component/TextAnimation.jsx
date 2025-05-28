'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export default function TypingWordsWithBreaks() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const lines = [
    [
      { word: 'We’re' },
      { word: 'Weeknd', className: 'text-[#FF4202]' },
      { word: 'Studio', className: 'text-[#FF4202]' },
      { word: '—' },
      { word: 'a' },
      { word: 'team' },
      { word: 'of' },
      { word: 'designers' },
      { word: 'who' },
      { br: 'lg' },
    ],
    [
      { word: 'help' },
      { word: 'busy' },
      { word: 'founders' },
      { word: 'and' },
      { word: 'growing' },
      { word: 'teams' },
      { word: 'take' },
      { br: 'lg' },
    ],
    [
      { word: 'design' },
      { word: 'off' },
      { word: 'their' },
      { word: 'plate' },
      { word: '(and' },
      { word: 'make' },
      { word: 'it' },
      { word: 'look' },
      { word: 'way' },
      { br: 'lg' },
    ],
    [
      { word: 'better),' },
      { word: 'so' },
      { word: 'they' },
      { word: 'can' },
      { word: 'focus' },
      { word: 'on' },
      { word: 'growth,' },
      { word: 'strategy,' },
      { word: 'and' },
      { br: 'lg' },
    ],
    [
      { word: 'everything' },
      { word: 'else' },
      { word: 'that' },
      { word: 'needs' },
      { word: 'their' },
      { word: 'attention.' },
    ],
  ];

  let wordIndex = 0;

  return (
    <section
      className="weeknd_studio pb-[100px] md:pb-[140px] 2xl:pb-[200px] scroll-mt-[130px]"
      id="About"
    >
      <div
        ref={ref}
        className="container max-w-[999px] mx-auto px-4 text-center"
      >
        <p className="font-times italic text-[#171717] text-[28px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[42px] md:leading-[52px] 2xl:text-[50px] 2xl:leading-[60px] flex flex-wrap justify-center -tracking-[1px]">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line.map((item, j) => {
                if (item.br) {
                  // Responsive line break using Tailwind
                  return (
                    <br
                      key={`br-${i}-${j}`}
                      className={`hidden ${item.br}:block w-full`}
                    />
                  );
                }

                const currentIndex = wordIndex++;
                return (
                  <motion.span
                    key={`word-${i}-${j}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: currentIndex * 0.05 }}
                    className={`inline-block mr-[12px] ${item.className || ''}`}
                  >
                    {item.word}
                  </motion.span>
                );
              })}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
