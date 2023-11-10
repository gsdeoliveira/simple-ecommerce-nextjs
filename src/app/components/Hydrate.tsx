'use client';

import { ReactNode, useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : <span className="bg-cyan-400 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 right-0 bottom-0 flex justify-center items-center loading loading-spinner text-red-500 w-20 md:w-32"></span>;
}