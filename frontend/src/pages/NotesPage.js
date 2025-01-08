import React, { useState, useEffect } from "react";
import api from "../services/api";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  const token = localStorage.getItem("token"); // Get the JWT token

  // Fetch notes on component load
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  // Add or update a note
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        // Update note
        await api.put(`/notes/${editingNote.id}`, { title, content });
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === editingNote.id ? { ...note, title, content } : note
          )
        );
      } else {
        // Add new note
        const response = await api.post("/notes", { title, content });
        setNotes((prevNotes) => [...prevNotes, response.data]);
      }
      setTitle("");
      setContent("");
      setEditingNote(null);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  // Delete a note
  const handleDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Start editing a note
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingNote(note);
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border mb-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border mb-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      </form>

      <ul>
        {notes.map((note) => (
          <li key={note.id} className="border p-4 mb-2 rounded">
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>{note.content}</p>
            <div className="flex space-x-2 mt-2">
              <button
                className="bg-yellow-500 text-white px-4 py-1 rounded"
                onClick={() => handleEdit(note)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
