"use client";
import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";

interface Task {
  title: string;
  theme: string;
  completed: boolean;
}

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !theme.trim()) return;

    setTasks((prev) => [
      ...prev,
      { title: title.trim(), theme: theme.trim(), completed: false },
    ]);
    setTitle("");
    setTheme("");
  };

  const toggleComplete = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const startEditing = (index: number, currentTitle: string) => {
    setEditingIndex(index);
    setEditingTitle(currentTitle);
  };

  const saveEdit = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, title: editingTitle.trim() } : task
      )
    );
    setEditingIndex(null);
    setEditingTitle("");
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-12 bg-[#b3c9f3]">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold">My List</h1>
        <Link
          href="/"
          className="bg-[#4c53af] text-white px-4 py-2 rounded-full hover:bg-[#3c4090] transition"
        >
          Home
        </Link>
      </header>

      {/* Task Box */}
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        {/* Add new task form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title..."
              className="w-full p-2 border border-gray-300 rounded-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Theme:</label>
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Enter task theme..."
              className="w-full p-2 border border-gray-300 rounded-full"
            />
          </div>
          <button
            type="submit"
            className="bg-[#4c53af] text-white px-4 py-2 rounded-full hover:bg-[#3c4090] transition"
          >
            Add
          </button>
        </form>

        {/* Task list */}
        <ul className="mt-6 space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded shadow-sm"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                />
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onBlur={() => saveEdit(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(index);
                    }}
                    className="border rounded px-2 py-1"
                    autoFocus
                  />
                ) : (
                  <span
                    onDoubleClick={() => startEditing(index, task.title)}
                    className={`${
                      task.completed ? "line-through text-gray-500" : ""
                    } cursor-pointer`}
                  >
                    <strong>{task.title}</strong> – {task.theme}
                  </span>
                )}
              </div>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="text-gray-600 text-center">No tasks yet.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
