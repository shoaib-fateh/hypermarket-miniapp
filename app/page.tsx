import { Suspense } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Image from "next/image";

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-8">
        {/* Header Section */}
        <header className="flex items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h1 className="text-2xl font-bold">Task Board</h1>
        </header>

        {/* Main Content Section */}
        <main className="flex flex-col gap-8">
          <TaskForm />
          <TaskList />
        </main>

        {/* Footer Section */}
        <footer className="flex justify-center text-sm text-gray-500">
          Powered by Next.js
        </footer>
      </div>
    </Suspense>
  );
}
