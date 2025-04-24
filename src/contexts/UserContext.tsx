// contexts/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Criamos o contexto com um valor inicial seguro
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {
    throw new Error("setUser was called outside of a UserProvider");
  },
});
interface UserProviderProps {
  children: ReactNode;
}

// Criamos o Provider no mesmo arquivo
export function UserProvider({ children }: UserProviderProps) {
  const mockUser: User = {
    name: "Usuário Mock",
    email: "mock@teste.com",
  };

  const [user, setUser] = useState<User | null>(mockUser); // Iniciando com um mock

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

// Hook customizado para usar o contexto com segurança
export function useUser() {
  return useContext(UserContext);
}
