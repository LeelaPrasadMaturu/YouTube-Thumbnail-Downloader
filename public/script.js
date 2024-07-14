 function getThumbnails() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);

    if (videoId) {
        fetchThumbnails(videoId);
    } else {
        alert('Invalid YouTube video URL');
    }
}

function extractVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);

    return (match && match[7].length === 11) ? match[7] : null;
}

// function fetchThumbnails(videoId) {
    
//     fetch(`/thumbnails?videoId=${videoId}`)
//         .then(response => response.json())
//         .then(data => {
//             displayThumbnails(data.items[0].snippet.thumbnails);
//         })
//         .catch(error => console.error('Error fetching thumbnails:', error));
// }


function displayThumbnails(thumbnails) {
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';

    for (const key in thumbnails) {
        const thumbnailUrl = thumbnails[key].url;
        const thumbnailElement = document.createElement('div');
        thumbnailElement.classList.add('thumbnail-container');

        const imageElement = document.createElement('img');
        imageElement.src = thumbnailUrl;

        const downloadButton = document.createElement('a');
        downloadButton.href = thumbnailUrl;
        downloadButton.download = 'thumbnail.jpg';
        downloadButton.textContent = 'Download';

        thumbnailElement.appendChild(imageElement);
        thumbnailElement.appendChild(downloadButton);
        thumbnailsContainer.appendChild(thumbnailElement);
    }
}



function fetchThumbnails(videoId) {
    fetch(`/thumbnails?videoId=${videoId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(thumbnails => {
            displayThumbnails(thumbnails);
        })
        .catch(error => {
            console.error('Error fetching thumbnails:', error);
            alert('Failed to fetch thumbnails. Please try again later.');
        });
}


