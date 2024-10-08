import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';

const app = express();
const port = 3030;

app.get('/' , (req, res) => {
    res.send('Hello World!');
})

const __dirname = import.meta.dirname;

const sslServerOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert'))
};

https.createServer(sslServerOptions, app).listen(port, () => {
    console.log(`HTTPS server running on port ${port}`);
});
