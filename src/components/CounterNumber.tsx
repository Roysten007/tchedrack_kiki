import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CounterNumber = ({ value, prefix = '', suffix = '', duration = 2, className = '', style = {} }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState<string | number>(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const isDecimal = value % 1 !== 0;

    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      
      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current));
      }

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`font-mono text-primary font-bold ${className}`} style={style}>
      {prefix}{display}{suffix}
    </span>
  );
};

export default CounterNumber;
