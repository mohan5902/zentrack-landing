const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
const config = require('./config');

router.post('/signup', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    try {
        const client = new MongoClient(config.mongoURI);
        await client.connect();
        const db = client.db('saas_signup');
        const users = db.collection('users');

        await users.insertOne({ name, email });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.emailUser,
                pass: config.emailPass
            }
        });
