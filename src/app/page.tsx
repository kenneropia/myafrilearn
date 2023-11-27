import Dashboard from "@/components/dashboard/Dashboard";
import { Navbar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <Dashboard />
    </main>
  );
}
