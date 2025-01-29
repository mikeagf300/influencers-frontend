"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        setMessage("Registration successful!");
        setIsError(false);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setMessage("Failed to register. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("Error: " + (error as any).message);
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Register</h1>
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="mb-4 w-full"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
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
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
