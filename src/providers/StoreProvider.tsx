import React, { useMemo } from "react";
import { StoreContext } from "../contexts";
import {RootStore} from "../stores";

interface ProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: ProviderProps) => {
  const rootStore = useMemo(() => new RootStore(), [])
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};