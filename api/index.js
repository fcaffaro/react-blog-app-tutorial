import express from 'express';
import postsRouter from './routes/posts.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5176',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',}));


app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);


app.listen(8800, () => {console.log("API is running on http://localhost:8800")});

app.get("/", (req, res) => {"Welcome to the API!"});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "API is running" });
});