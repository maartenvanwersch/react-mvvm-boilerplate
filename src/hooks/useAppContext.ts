import { useContext, createContext } from 'react'
import { RootStore } from "../stores/RootStore"

const StoreContext = createContext<RootStore>({} as RootStore);

export const useAppContext = () => useContext(StoreContext)
