// ThemeContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Definindo os tipos
type ThemeColor = string;

interface ThemeState {
  backgroundColor: ThemeColor;
}

type ThemeAction = { type: "CHANGE_COLOR"; payload: ThemeColor } | { type: "RESET" };

interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

// Criando o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Definindo o estado inicial
const initialState: ThemeState = {
  backgroundColor: "#ffffff", // Cor padrão (branco)
};

// Definindo as ações do reducer
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Criando o Provider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

// Hook personalizado para usar o tema
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
