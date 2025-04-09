import { useState, useRef, useEffect, RefObject } from "react";

export const useDynamicSize = (): [RefObject<HTMLInputElement>,{width: number, height:number}] => {
  const ref = useRef<HTMLInputElement>(null);
  const [size, setSize] = useState<{width: number, height: number}>({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return [ref, size];
};

