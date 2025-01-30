"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useUser } from "../../contexts/UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Guardar tanto el token como los datos del usuario en localStorage
        localStorage.setItem("access_token", userData.access_token);
        localStorage.setItem("user", JSON.stringify(userData.user)); // Guardar los datos del usuario
        setUser(userData.user); // Establecer el usuario en el contexto
        setMessage("Login successful!");
        setIsError(false);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        setMessage("Failed to login. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("Error: " + (error as any).message);
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <div className="w-full max-w-md">
        {message && (
          <div
            className={`mb-4 p-4 rounded ${
              isError ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {message}
          </div>
        )}
        <Input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          className="mb-4 w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="mb-4 w-full"
        />
        <Button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
