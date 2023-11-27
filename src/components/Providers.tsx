"use client";

import { ReactQueryProvider } from "@/contexts/ReactQueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
