import { useContext } from "react";
import { UserAuthContext } from "../../providers/user-auth-provider/user-auth-context";

/**
 * Checks if a user is logged in.
 * @returns `true` if a user is logged in, `false` otherwise.
 */
export const useIsUserLoggedIn = () => {
    const context = useContext(UserAuthContext);
    return !!context?.user;
}