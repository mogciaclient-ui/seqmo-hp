'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProblemResolution() {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.6 });

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return <div className="problem-resolution">
    <p ref={elementRef} className={`resolution-copy${visible ? ' is-visible' : ''}`}>
      そのお悩みseQmo<span className="brand-dot">.</span>が解決します
    </p>
  </div>;
}
