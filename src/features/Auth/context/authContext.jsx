import React, { createContext, useCallback, useEffect, useState } from "react";
import authService from "../services/authService";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("auth");
    if (raw) {
      try {
        setAuth(JSON.parse(raw));
      } catch {
        localStorage.removeItem("auth");
      }
    }
    setLoading(false);
  }, []);

  const persist = useCallback((payload) => {
    setAuth(payload);
    localStorage.setItem("auth", JSON.stringify(payload));
  }, []);

  const login = useCallback(async (credentials) => {
    const res = await authService.login(credentials);
    persist({
      user: res.user,
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });
    return res;
  }, [persist]);

  const logout = useCallback(async () => {
    await authService.logout();
    setAuth(null);
    localStorage.removeItem("auth");
  }, []);

  const refresh = useCallback(async () => {
    if (!auth?.refreshToken) throw new Error("No hay refresh token");
    const res = await authService.refresh(auth.refreshToken);
    const updated = { ...auth, accessToken: res.accessToken, refreshToken: res.refreshToken };
    persist(updated);
    return res.accessToken;
  }, [auth, persist]);

  const value = {
    auth,
    user: auth?.user ?? null,
    accessToken: auth?.accessToken ?? null,
    loading,
    login,
    logout,
    refresh,
    isAuthenticated: !!auth?.user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const AuthContext = createContext(null);
