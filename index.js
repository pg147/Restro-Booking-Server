// Dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Libs
import { connectDB } from './lib/db.js';

// Routers
import bookingRoutes from './routes/booking.route.js';

dotenv.config(); // for using env variables

const app = express(); // initialized express app
const PORT = process.env.PORT_NUMBER;


const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000'];

// Using json parser
app.use(express.json());

// CORS
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}))

// Routes 
app.use('/api', bookingRoutes);

// Server 
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    connectDB();
});