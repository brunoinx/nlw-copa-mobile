import { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  async function signIn() {
    console.log("Entrou");
  }

  return (
    <AuthContext.Provider
      value={{
        user: {
          name: "Bruno Henrique",
          avatarUrl: "https://github.com/brunoinx.png",
        },
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
