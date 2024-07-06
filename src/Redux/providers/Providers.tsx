"use client"
import { store } from "@/Redux/app/store"
import { Provider } from "react-redux"
interface ProvidersPros {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersPros) => {
  return <Provider store={store}>{children}</Provider>
}
