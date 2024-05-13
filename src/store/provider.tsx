"use client";
import React, { createContext, ReactNode } from "react";
import store from "./RootStore";

export const StoreContext = createContext(store);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
