"use client";

import React, { useState, useEffect, useRef } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<any>, boolean] {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce && element) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return [ref, isIntersecting];
}
