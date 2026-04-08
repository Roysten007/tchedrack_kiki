import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const CounterNumber = ({ value, prefix = '', suffix = '', duration = 2 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono text-primary text-3xl md:text-4xl font-bold">
      {prefix}{display}{suffix}
    </span>
  );
};

export default CounterNumber;
