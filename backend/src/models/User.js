const db = require('../config/db');

exports.createUser = async (username, email, passwordHash) => {
    const [result] = await db.query(
        "INSERT INTO Users (username, email, password_hash) VALUES (?, ?, ?)",
        [username, email, passwordHash]
    );
    return result.insertId;
};

exports.getUserByEmail = async (email) => {
    const [rows] = await db.query("SELECT * FROM Users WHERE email = ?", [email]);
    return rows[0];
};

exports.getUserByUsername = async (username) => {
    const [rows] = await db.query("SELECT * FROM Users WHERE username = ?", [username]);
    return rows[0];
  };