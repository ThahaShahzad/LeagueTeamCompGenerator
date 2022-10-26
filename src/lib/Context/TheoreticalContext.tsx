import React, { useContext, createContext, useState } from 'react'

export interface roles {
  Top: string
  Jungle: string
  Mid: string
  Adc: string
  Support: string
}

export interface TheoreticalContextType {
  roles: roles
  setRoles: React.Dispatch<React.SetStateAction<roles>>
}

const theoreticalContext = createContext<TheoreticalContextType>(undefined!)

interface props {
  children: React.ReactNode
}

export const TheoreticalContextProvider: React.FC<props> = ({ children }) => {
  const Value = useProvideTheoreticalContext()
  return <theoreticalContext.Provider value={Value}>{children}</theoreticalContext.Provider>
}

export const useTheoreticalContext = () => {
  return useContext(theoreticalContext)
}

const useProvideTheoreticalContext = () => {
  const [roles, setRoles] = useState<roles>(undefined!)
  return {
    roles,
    setRoles
  }
}
