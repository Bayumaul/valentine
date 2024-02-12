import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Valentine from "./valentine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Valentine />
    </main>
  );
}
