import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-0 m-0 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <Card className="bg-gray-800 p-6">
        <CardContent>
          <p className="text-lg">This is a temporary dashboard page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
