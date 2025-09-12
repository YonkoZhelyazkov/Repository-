
"use client";
import { useState, useEffect } from "react";

type Note = {
  title: string;
  content: string;
  addDate: string;
  updateDate: string;
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editIdx, setEditIdx] = useState<number | null>(null);

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
  const now = new Date().toLocaleString();
  setNotes([
    ...notes,
    {
      title,
      content,
      addDate: now,
      updateDate: now,
    },
  ]);
  setTitle("");
  setContent("");
};

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const startEdit = (index: number) => {
    setEditIdx(index);
    setTitle(notes[index].title);
    setContent(notes[index].content);
  };
  
const updateNote = () => {
  if (editIdx !== null) {
    const now = new Date().toLocaleString();
    const updatedNotes = notes.map((note, idx) =>
      idx === editIdx
        ? { ...note, title, content, updateDate: now }
        : note
    );
    setNotes(updatedNotes);
    setEditIdx(null);
    setTitle("");
    setContent("");
  }
}

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 md:p-16 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-6">Notes</h1>
      <div className="flex flex-col gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="border rounded px-3 py-2"
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
          className="border rounded px-3 py-2"
          rows={3}
        />
        {editIdx === null ? (
          <button
            onClick={addNote}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        ) : (
          <button
            onClick={updateNote}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update
          </button>
        )}
      </div>
      <ul className="w-full max-w-md space-y-4">
        {notes.map((note, idx) => (
          <li
            key={idx}
            className="flex flex-col bg-white shadow rounded px-4 py-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">{note.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(idx)}
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(idx)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
            <span className="text-gray-700">{note.content}</span>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Added: {note.addDate}</span>
              <span>Updated: {note.updateDate}</span>
            </div>
          </li>
        ))}
        {notes.length === 0 && (
          <li className="text-gray-400 text-center">No notes added yet.</li>
        )}
      </ul>
    </main>
  );
}