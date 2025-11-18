"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isSignUpModalOpen: boolean;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isSignUpModalOpen,
        openSignUpModal,
        closeSignUpModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

