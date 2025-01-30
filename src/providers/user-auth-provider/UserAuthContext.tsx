import { useEffect, useState } from "react";
import { account } from "../../lib/appwrite";

import { IUserAuthProviderProps } from "../../components/auth/types";
import { UserAuthContext } from "./user-auth-context";

export const UserAuthProvider = ({ children }: IUserAuthProviderProps) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await account.get();
        if (response) {
          setUser(response);
        } else {
          console.warn("No user data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
