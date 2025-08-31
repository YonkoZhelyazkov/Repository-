"use client";
import { useState, useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input.trim()]);
      setInput("");
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-6">Notes</h1>
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md space-y-4">
        {notes.map((note, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-white shadow rounded px-4 py-2"
          >
            <span>{note}</span>
            <button
              onClick={() => deleteNote(idx)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
        {notes.length === 0 && (
          <li className="text-gray-400 text-center">No notes added yet.</li>
        )}
      </ul>
    </main>
  );
}
