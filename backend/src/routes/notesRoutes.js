// notesRoutes.js
const express = require('express');
const { getNotes, addNote, updateNote, deleteNote } = require('../controllers/notesController');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);
router.get('/', getNotes);
router.post('/', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
