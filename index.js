const express = require('express');
const app = express();
const port = 3000;

// I am not using JWT Right now Because it was mentioned in the requirement that I have to do simple authentication
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log("Auth", authHeader  )
    // You just need to write "Bearer mysecretkey" in your Authorization Type Bearer in Postman or any API Tester you want to use
    if (!authHeader || authHeader !== 'Bearer mysecretkey') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next(); // Proceed if the token is correct
};

// Endpoint Number 1: "Hello World"
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

// Endpoint 2: "Hello <Name>. Today is the <Date>"
app.get('/greet', authMiddleware, (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: 'Name query parameter is required' });
    }

    const today = new Date().toDateString();
    res.send(`Hello ${name}. Today is ${today}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
