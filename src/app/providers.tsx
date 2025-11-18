"use client";

import { HeroUIProvider } from "@heroui/react";
import { ModalProvider } from "@/contexts/ModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ModalProvider>{children}</ModalProvider>
    </HeroUIProvider>
  );
}

