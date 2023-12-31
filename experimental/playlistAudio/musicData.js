let musicData = [
    { id: 1, name: "Sunset Days", artist: "YouthXL", thumbnail: "path_to_img1.jpg", url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3", buyLink: "http://buySong1.com" },
    { id: 2, name: "Dreamy Roads", artist: "YouthXL", thumbnail: "path_to_img2.jpg", url: "http://techslides.com/demos/samples/sample.mp3", buyLink: "http://buySong2.com" },
    { id: 3, name: "Echo Chamber", artist: "Clones of Clarence", thumbnail: "path_to_img3.jpg", url: "path_to_song3.mp3", buyLink: "http://buySong3.com" },
    { id: 4, name: "Pixel World", artist: "Clones of Clarence", thumbnail: "path_to_img4.jpg", url: "path_to_song4.mp3", buyLink: "http://buySong4.com" },
    { id: 5, name: "Witch's Brew", artist: "Samuel Dylan Witch", thumbnail: "path_to_img5.jpg", url: "path_to_song5.mp3", buyLink: "http://buySong5.com" },
    { id: 6, name: "Arcane Spell", artist: "Samuel Dylan Witch", thumbnail: "path_to_img6.jpg", url: "path_to_song6.mp3", buyLink: "http://buySong6.com" },
    { id: 7, name: "Mystery Lane", artist: "Riddle M", thumbnail: "path_to_img7.jpg", url: "path_to_song7.mp3", buyLink: "http://buySong7.com" },
    { id: 8, name: "Puzzle Pieces", artist: "Riddle M", thumbnail: "path_to_img8.jpg", url: "path_to_song8.mp3", buyLink: "http://buySong8.com" },
    { id: 9, name: "Arena Anthem", artist: "Justin Arena", thumbnail: "path_to_img9.jpg", url: "path_to_song9.mp3", buyLink: "http://buySong9.com" },
    { id: 10, name: "Journey Within", artist: "Justin Arena", thumbnail: "path_to_img10.jpg", url: "path_to_song10.mp3", buyLink: "http://buySong10.com" },
    { id: 11, name: "Dusk Delight", artist: "YouthXL", thumbnail: "path_to_img11.jpg", url: "path_to_song11.mp3", buyLink: "http://buySong11.com" },
    { id: 12, name: "Crystal Visions", artist: "Clones of Clarence", thumbnail: "path_to_img12.jpg", url: "path_to_song12.mp3", buyLink: "http://buySong12.com" },
    { id: 13, name: "Witching Hour", artist: "Samuel Dylan Witch", thumbnail: "path_to_img13.jpg", url: "path_to_song13.mp3", buyLink: "http://buySong13.com" },
    { id: 14, name: "Riddled Dreams", artist: "Riddle M", thumbnail: "path_to_img14.jpg", url: "path_to_song14.mp3", buyLink: "http://buySong14.com" },
    { id: 15, name: "Arena's Echo", artist: "Justin Arena", thumbnail: "path_to_img15.jpg", url: "path_to_song15.mp3", buyLink: "http://buySong15.com" },
    { id: 16, name: "Youthful Joy", artist: "YouthXL", thumbnail: "path_to_img16.jpg", url: "path_to_song16.mp3", buyLink: "http://buySong16.com" },
    { id: 17, name: "Cloned Worlds", artist: "Clones of Clarence", thumbnail: "path_to_img17.jpg", url: "path_to_song17.mp3", buyLink: "http://buySong17.com" },
    { id: 18, name: "Samuel's Serenade", artist: "Samuel Dylan Witch", thumbnail: "path_to_img18.jpg", url: "path_to_song18.mp3", buyLink: "http://buySong18.com" },
    { id: 19, name: "Mystic Riddle", artist: "Riddle M", thumbnail: "path_to_img19.jpg", url: "path_to_song19.mp3", buyLink: "http://buySong19.com" },
    { id: 20, name: "Arena's Odyssey", artist: "Justin Arena", thumbnail: "path_to_img20.jpg", url: "path_to_song20.mp3", buyLink: "http://buySong20.com" }
];


// Fetch the music data from music.json
fetch('music.json')
    .then(response => response.json())
    .then(data => {
        musicData = data.songs;
    })
    .catch(error => {
        console.error("There was an error loading the music data:", error);
    });

// Handle search input
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    // Search through the music data
    const results = musicData.filter(song => song.title.toLowerCase().includes(searchTerm));

    results.forEach(song => {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `${song.title} - ${song.artist}`;
        resultDiv.classList.add('searchResult');

        // Click event to play the song
        resultDiv.addEventListener('click', function() {
            const audioPlayer = document.getElementById('audioPlayer');
            const audioSource = document.getElementById('audioSource');
            audioSource.src = song.url;
            audioPlayer.load();
            audioPlayer.play();
        });

        searchResultsDiv.appendChild(resultDiv);
    });
});
