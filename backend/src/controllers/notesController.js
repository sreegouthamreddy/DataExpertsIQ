let notes = []; // Temporary in-memory storage for notes

exports.getAllNotes = (req, res) => {
  const userNotes = notes.filter((note) => note.userId === req.user.id);
  res.json(userNotes);
};

exports.addNote = (req, res) => {
  const { title, content } = req.body;
  const note = { id: Date.now(), title, content, userId: req.user.id };
  notes.push(note);
  res.status(201).json(note);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id) && note.userId === req.user.id);
  if (noteIndex === -1) return res.status(404).json({ message: 'Note not found' });

  notes[noteIndex] = { ...notes[noteIndex], title, content };
  res.json(notes[noteIndex]);
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id) && note.userId === req.user.id);
  if (noteIndex === -1) return res.status(404).json({ message: 'Note not found' });

  notes.splice(noteIndex, 1);
  res.status(204).send();
};
