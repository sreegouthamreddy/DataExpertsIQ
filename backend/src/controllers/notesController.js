const db = require('../config/db');

exports.getNotes = async (req, res) => {
    const [notes] = await db.query("SELECT * FROM Notes WHERE user_id = ?", [req.user.id]);
    res.json(notes);
};

exports.addNote = async (req, res) => {
    const { title, content } = req.body;
    const [result] = await db.query(
        "INSERT INTO Notes (user_id, title, content) VALUES (?, ?, ?)",
        [req.user.id, title, content]
    );
    res.status(201).json({ id: result.insertId });
};

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    await db.query(
        "UPDATE Notes SET title = ?, content = ? WHERE id = ? AND user_id = ?",
        [title, content, id, req.user.id]
    );
    res.json({ message: 'Note updated' });
};

exports.deleteNote = async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM Notes WHERE id = ? AND user_id = ?", [id, req.user.id]);
    res.json({ message: 'Note deleted' });
};
