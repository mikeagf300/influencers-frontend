"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "../../contexts/UserContext";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-0 m-0 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <Card className="bg-gray-800 p-6">
        <CardContent>
          {user ? (
            <div>
              <p className="text-lg">Welcome, {user.name}!</p>
              <p className="text-lg">Email: {user.email}</p>
            </div>
          ) : (
            <p className="text-lg">Loading user data...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
