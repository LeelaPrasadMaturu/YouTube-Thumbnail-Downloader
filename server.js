const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config();
const app = express();
const apiKey = process.env.API_KEY;

app.get('/thumbnails',async(req,res)=>{
    const videoId = req.query.videoId;

    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
    await axios.get(apiUrl)
    
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

app.get('/sitemap.xml',(req,res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
