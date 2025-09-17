import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-8xl flex justify-center ">
          This is our awesome intern project
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <Link
            href="/Notes"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
          Create a note
        </Link>
        </div>

      </main>
    </div>
  );
}
