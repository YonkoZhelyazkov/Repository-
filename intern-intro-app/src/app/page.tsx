"use client";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import NotesList from "./components/NotesList";

export default function Home() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-[#d0f8eb]">
      {/* Header with navigation */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Intern Project</h1>

        <div className="flex gap-4">
          {currentView !== "home" && (
            <button
              onClick={() => setCurrentView("home")}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Home
            </button>
          )}
          {currentView === "home" && (
            <>
              <button
                onClick={() => setCurrentView("todo")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Open ToDo List
              </button>
              <button
                onClick={() => setCurrentView("notes")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Open Notes
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center gap-8">
        {currentView === "home" && (
          <div className="text-4xl text-center sm:text-8xl">
            This is our awesome intern project
          </div>
        )}

        {currentView === "todo" && (
          <div className="w-full flex justify-center">
            <ToDoList />
          </div>
        )}

        {currentView === "notes" && (
          <div className="w-full flex justify-center">
            <NotesList />
          </div>
        )}
      </main>
    </div>
  );
}



