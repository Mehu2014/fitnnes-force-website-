"use client";

import React, { createContext, useContext, useState } from "react";
import { mockUser } from "@/data/mockData";

interface AuthContextType {
  user: typeof mockUser | null;
  login: (email: string, pass: string) => void;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<typeof mockUser | null>(null);

  const login = (email: string, pass: string) => {
    // Simulate login
    if (email.includes("admin")) {
      setUser({ ...mockUser, role: "admin", name: "Admin User", email });
    } else {
      setUser({ ...mockUser, email });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
