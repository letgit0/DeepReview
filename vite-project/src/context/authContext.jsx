import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadUser = async () => {

    try {
      const res = await fetch("http://localhost:3000/api/auth/profile", {
        credentials: "include",
      });

      const data = await res.json();

      setUser(data.user || null);
    } catch (err) {
      console.log("Profile fetch error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  loadUser();
}, []);

  const logout = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const res = await fetch("http://localhost:3000/api/auth/profile", {
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    finally {
      setUser(null);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        isAuthenticated: !!user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}