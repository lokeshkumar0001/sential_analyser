require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    const { spawn } = require('child_process');

    const videoId = req.query.video_id;

    if (!videoId) {
        return res.status(400).send('Missing video_id query parameter');
    }

    const pyProg = spawn('python', ['./sentinal.py',videoId], {
        env: { 
            ...process.env 
        }
    });

    let dataString = '';

    pyProg.stdout.on('data', (data) => {
        dataString += data.toString();
    });

    pyProg.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pyProg.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        try {
            const jsonData = JSON.parse(dataString);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(4000, () => {
    console.log('server started on port 4000');
});
