import React from "react";

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type VmRef<ViewModel> = Override<React.MutableRefObject<null>, { current: ViewModel | null }>
