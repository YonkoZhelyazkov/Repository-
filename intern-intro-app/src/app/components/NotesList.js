// components/NotesList.js
import { useState } from "react";

export default function NotesList() {
  const [noteTitle, setNoteTitle] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteTitle.trim()) return;

    const newNote = {
      title: noteTitle,
      time: reminderTime,
      createdAt: new Date().toLocaleString(),
    };

    setNotes([...notes, newNote]);
    setNoteTitle("");
    setReminderTime("");
  };

  return (
    <div className="w-full max-w-md bg-[#fbeec1] p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Reminders</h2>

      <form onSubmit={handleAddNote} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Reminder Title:</label>
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-full"
            placeholder="E.g. Call mom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Reminder Time (optional):</label>
          <input
            type="datetime-local"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4c53af] text-white px-4 py-2 rounded-full hover:bg-[#3c4090]"
        >
          Add Reminder
        </button>
      </form>

      {notes.length > 0 && (
        <ul className="mt-6 space-y-3">
          {notes.map((note, index) => (
            <li key={index} className="p-3 bg-white rounded shadow">
              <div className="font-semibold">{note.title}</div>
              {note.time && (
                <div className="text-sm text-gray-600">⏰ {new Date(note.time).toLocaleString()}</div>
              )}
              <div className="text-xs text-gray-400">Added on {note.createdAt}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
