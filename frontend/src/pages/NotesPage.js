import React, { useState, useEffect } from 'react';
import NoteCard from '../components/NoteCard';
import api from '../services/api';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchNotes = async () => {
    const { data } = await api.get('/notes', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setNotes(data);
  };

  const handleAddNote = async () => {
    await api.post('/notes', { title, content }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchNotes();
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = async (id) => {
    await api.delete(`/notes/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="p-2 border w-full mb-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={() => {}}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
