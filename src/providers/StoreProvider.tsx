import React, {ProviderProps, useMemo } from "react";
import { StoreContext } from "@contexts";
import {RootStore} from "@stores";

export const StoreProvider = ({ children }: ProviderProps<RootStore>) => {
  const rootStore = useMemo(() => new RootStore(), [])
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};