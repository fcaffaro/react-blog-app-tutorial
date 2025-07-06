import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


/**
 * Authentication controller for user registration, login, and logout.
 *
 * @module authController
 */
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

    db.query(q, [email, username], (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (data.length > 0) {
            return res.status(409).json({ message: 'Username or email already exists' });
        }

        // Solo se non esiste già, procedi con l'inserimento
        const hashedPassword = bcrypt.hashSync(password, 10);
        const q2 = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        const values = [username, email, hashedPassword];

        db.query(q2, [values], (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            return res.status(200).json({ message: 'User registered successfully' });
        });
    });
}


export const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const q = 'SELECT * FROM users WHERE username = ?';

    db.query(q, [username], (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = data[0];

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        // Check if the password is valid
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }


        const token = jwt.sign({ id: user.id }, "jwtsecret", { expiresIn: '1h' });

        res.cookie('access_token', token, { httpOnly: true }).status(200).json({ message: 'User logged in successfully', user: { username: user.username, email: user.email } });
    })

}


export const logout = async (req, res) => {
    res.clearCookie('access_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict' // Prevent CSRF attacks
    }).status(200).json({ message: 'User logged out successfully' });
}