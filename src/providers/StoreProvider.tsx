import React, { useMemo } from "react";
import { StoreContext } from "@contexts";
import {RootStore} from "@stores";
import {ProviderComponentProps} from "@my-types/interfaces/provider-component-props";

export const StoreProvider = ({ children }: ProviderComponentProps) => {
  const rootStore = useMemo(() => new RootStore(), [])
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};