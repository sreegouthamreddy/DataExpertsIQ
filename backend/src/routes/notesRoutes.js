const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/', authenticateToken, notesController.getAllNotes);
router.post('/', authenticateToken, notesController.addNote);
router.put('/:id', authenticateToken, notesController.updateNote);
router.delete('/:id', authenticateToken, notesController.deleteNote);

module.exports = router;
