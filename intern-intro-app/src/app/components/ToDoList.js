// components/TodoList.js
import { useState } from "react";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !theme.trim()) return;
    setTasks([...tasks, { title, theme }]);
    setTitle("");
    setTheme("");
  };

  return (
    <div className="w-full max-w-md bg-[#b3c9f3] p-6 rounded shadow">
      <h1 className="text-center text-2xl font-bold mb-4">My list</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Theme:</label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4c53af] text-white px-4 py-2 rounded-full hover:bg-[#3c4090]"
        >
          Add
        </button>
      </form>

      {tasks.length > 0 && (
        <ul className="mt-6 list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong> - {task.theme}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
