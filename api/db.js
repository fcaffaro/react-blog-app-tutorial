import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aAOOsfh298ugf',
    database: 'blog_db'
})