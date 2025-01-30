import { createContext } from "react";
import { IUserAuthContextType } from "../../components/auth/types";

export const UserAuthContext = createContext<IUserAuthContextType | null>(null);