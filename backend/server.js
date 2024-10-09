import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';
import cors from 'cors';

const __dirname = import.meta.dirname;
console.log('dirname: '+__dirname);
const app = express();
const port = 3030;

app.use(express.json());

app.use(express.static(path.join(__dirname,'..', 'frontend', 'build')));

app.use(cors());

app.get('/' , (req, res) => {
    res.status(200).send('Hello World!');
})

app.post('/api/signup', (req, res) => {
    console.log(`Signup request with this body: ${JSON.stringify(req.body)}`);
    res.status(201).send('Signup yet!');
})


const sslServerOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert'))
};

https.createServer(sslServerOptions, app).listen(port, () => {
    console.log(`HTTPS server running on port ${port}`);
});
