import { createContext } from "react";

interface IUserAuthContextType {
  user: object;
}

export const UserAuthContext = createContext<IUserAuthContextType | null>(null);