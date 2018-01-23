const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/docs', (req, res) => res.sendFile(path.resolve(__dirname, 'static', 'index.html')));
app.get('/guide', (req, res) => res.sendFile(path.resolve(__dirname, 'static', 'index.html')));

app.listen(3000, () => console.log('connected'));