# YouTube Thumbnail Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.17.1-lightgrey.svg)](https://expressjs.com/)

YouTube Thumbnail Downloader is a web application that allows users to download thumbnails from YouTube videos by simply providing the video URL. This project uses Node.js, Express, and the YouTube Data API to fetch and display video thumbnails.

## Features

- Fetch YouTube video thumbnails using the YouTube Data API
- Display available thumbnails
- Download thumbnails

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/youtube-thumbnail-downloader.git
2. Navigate to the project directory:
    ```sh
     cd youtube-thumbnail-downloader
3. Install the dependencies:
   ```sh
   npm install
4. Create a .env file in the root directory and add your YouTube API key:
     ```sh
    API_KEY=your_youtube_api_key
5. Start the server:
     ```sh
     npm start
6. Open your browser and go to `http://localhost:3000`

## Usage
- Enter the URL of the YouTube video in the input field.
- Click the "Get Thumbnails" button.
- Thumbnails will be displayed below the input field.
- Click on the "Download" button below each thumbnail to download it.
 
## API
- Fetch Thumbnails
   - URL: /thumbnails
   - Method: GET
   - Query Parameters:
   - videoId: The ID of the YouTube video
- Response:
   - Success: JSON object containing thumbnails
   - Error: JSON object containing error message

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

License
This project is licensed under the MIT License. See the LICENSE file for details.

<hr>

Made with ❤️ by Leela Prasad
