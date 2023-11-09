'use client';

import { ReactNode, useState, useEffect } from 'react';

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : <span className="bg-slate-700 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 right-0 bottom-0 flex justify-center items-center loading loading-spinner text-red-500 bg-red-500 w-20 md:w-32"></span>;
}