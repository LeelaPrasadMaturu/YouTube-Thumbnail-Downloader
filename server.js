const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config();
const app = express();
const apiKey = process.env.API_KEY;

const botList = ['Googlebot', 'Bingbot', 'Slurp'];

// Middleware to detect user agent
app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'];
    req.isBot = botList.some(bot => userAgent.includes(bot));
    next();
});

app.get('/thumbnails', async (req, res) => {
    const videoId = req.query.videoId;
    try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
        const response = await axios.get(apiUrl);
        const data = response.data;
        res.json(data.items[0].snippet.thumbnails);
    } catch (error) {
        console.error('Error fetching thumbnails:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/google5b9f50082480c026.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'google5b9f50082480c026.html'));
});

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    if (req.isBot) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Download YouTube Thumbnails in HD - Fast & Free</title>
                <meta name="description" content="Download YouTube thumbnails in HD quality for free. Enter the video URL to get started and enjoy high-quality thumbnails instantly. Click now!">
                <meta name="keywords" content="YouTube Thumbnail Downloader, Download HD Thumbnails, Free YouTube Thumbnails, YouTube Video Images, HD Thumbnail Download">
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <div id="app">
                    <h1>YouTube Thumbnail Downloader</h1>
                    <h2>Download YouTube video thumbnails in high quality.</h2>
                    <h3>Free YouTube Thumbnail Downloader</h3>
                    <h4>Download HD Thumbnails</h4>
                    <p>YouTube Thumbnail Downloader, Download YouTube Thumbnails, HD Thumbnails, Free YouTube Downloader, YouTube Thumbnail Download Tool, YouTube Video Thumbnail, HD YouTube Thumbnail Downloader, Free HD Thumbnails, Download YouTube Video Images, YouTube Thumbnail Extractor</p>
                    <p>Just enter the URL of the YouTube video below to get started.</p>
                    <form id="youtubeForm">
                        <label for="videoUrl">YouTube Video URL:</label>
                        <input type="text" id="videoUrl" placeholder="Enter YouTube video URL">
                        <button type="button" onclick="getThumbnails()">Get Thumbnails</button>
                    </form>
                    <div id="thumbnails"></div>
                </div>
                <script src="script.js"></script>
            </body>
            </html>
        `);
    } else {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
