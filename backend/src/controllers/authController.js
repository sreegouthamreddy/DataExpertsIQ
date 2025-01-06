const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await User.createUser(username, email, passwordHash);
    res.status(201).json({ message: 'User created', userId });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.getUserByUsername(username); // Update this to fetch user by username
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  };
  
