"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-[#b3c9f3]">
      {/* Header with navigation */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Intern Project</h1>

        <div>
          <Link
            href="/todo"
            className="bg-[#4c53af] text-white px-4 py-2 rounded-full hover:bg-[#3c4090] transition"
          >
            Todo
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-semibold">Welcome to the Intern Project</h2>
      </main>
    </div>
  );
}
