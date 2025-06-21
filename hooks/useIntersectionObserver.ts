
import React, { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement,>(
  options?: IntersectionObserverOptions
): [React.RefObject<T>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options?.triggerOnce) {
        if (observerRef.current) {
          observerRef.current.unobserve(element);
        }
      }
    }, options);

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
    