import { createContext } from "react";
import { User } from "../../types/auth";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType>({
  user: {
    id: null,
    email: null,
    fullName: null,
  },
  setUser: () => {},
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
