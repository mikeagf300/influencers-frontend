import { ReactNode } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface UserSession {
  id: number;
  name: string;
  email: string;
  profilePicture?: string;
  login: boolean;
  token: string;
  user: User; // Aquí eliminamos el "?" para hacer que el usuario no sea opcional
}
