import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getUser, saveUser, removeUser } from "@/storage/authStorage";
import { useEffect } from "react";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getUser() || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getUser();

    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    saveUser(userData);
  };

  const logout = () => {
    setUser(null);
    removeUser();
  };

  function updateUser(updatedData) {
    const updatedUser = {
      ...user,
      ...updatedData,
    };

    setUser(updatedUser);
    saveUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        updateUser,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
