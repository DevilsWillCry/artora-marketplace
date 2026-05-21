import { useState } from "react";
import { VisitUserContext } from "./VisitUserContext";
import { getUser, saveUser, removeUser } from "@/storage/visitUserStorage";
import { useEffect } from "react";

export default function VisitUserProvider({ children }) {
  const [visitUser, setVisitUser] = useState(() => getUser() || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getUser();

    if (storedUser) {
      setVisitUser(storedUser);
    }

    setLoading(false);
  }, []);

  const watchingUserProfile = (userData) => {
    setVisitUser(userData);
    saveUser(userData);
  };

  const removeWatchedUser = () => {
    setVisitUser(null);
    removeUser();
  };

  return (
    <VisitUserContext.Provider
      value={{
        visitUser,
        loading,
        watchingUserProfile,
        removeWatchedUser,
      }}
    >
      {children}
    </VisitUserContext.Provider>
  );
}
