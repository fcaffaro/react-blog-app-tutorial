export const addPost = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    try {
        const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
        const values = [title, content];

        db.query(query, values, (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ id: results.insertId, title, content });
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}