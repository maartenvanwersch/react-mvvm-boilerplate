import { useContext } from 'react'
import { StoreContext } from "../contexts";

export const useAppContext = () => useContext(StoreContext)
