import express from 'express';
import {connectDB} from './db';

const app = express();
app.use(express.json());

connectDB(app);
