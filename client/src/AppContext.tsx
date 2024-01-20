import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  authenticated: boolean;
  user: string;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  return (
    <AppContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};
