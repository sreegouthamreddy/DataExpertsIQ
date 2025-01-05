import React from 'react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p>{note.content}</p>
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
