new Vue({
    el: '#songSearchApp',
    data: {
      currentSong: null,
      currentArtist: '',
      songs: [
        {
            artist: 'Samuel Dylan Witch',
            songTitle: 'Willow Tree Blues',
            artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_1',
            albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_1',
            play: false
          },
        {
            artist: 'Coral Reefer',
            songTitle: 'Watching Her Fly',
            mp3url: 'https://ahoycollection.s3.amazonaws.com/Coral+Reefer+-+Untitled+(original).mp3',
            play: false
          },

          {
              artist: 'Cambell Rice',
              songTitle: 'Far From Here',
              artistThumbnail: 'https://unsplash.com/photos/random_person_image2',
              albumArtwork: 'https://unsplash.com/photos/random_nautical_image2',
              mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Campbell+Rice-+From+Here.mp3',
              play: false
            },
          {
              artist: 'Youth XL',
              songTitle: 'Summer Bummer',
              artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_3',
              albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_3',
              mp3url: 'https://ahoycollection.s3.amazonaws.com/Youth+XL+-+Summer+Bummer.mp3',
              play: false
            },
            {
                artist: 'Youth XL',
                songTitle: 'Yoga',
                artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_4',
                albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_4',
                mp3url: 'https://ahoycollection.s3.amazonaws.com/Youth+XL+-+Yoga.mp3',
                play: false
              },
              {
                  artist: 'Samuel Dylan Witch',
                  songTitle: "I've Seen Better Days",
                  artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_5',
                  albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_5',
                  mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Campbell+Rice-+From+Here.mp3',
                  play: false
              },
              {
                artist: 'Samuel Dylan Witch',
                songTitle: "Sweet Three Chord Melody",
                artistThumbnail: 'https://unsplash.com/photos/your_new_selected_artist_image.png',
                mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Campbell+Rice-+From+Here.mp3',
                albumArtwork: '/getOn/cambellrice.png',
                play: false
            },
              {
                  artist: 'Cambell Rice',
                  songTitle: 'Lonely Thoughts in a Crowded Room',
                  artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_6',
                  albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_6',
                  mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Campbell+Rice-+From+Here.mp3',
                  play: false
              },
              {
                artist: 'Sara-Joy Liebig',
                songTitle: 'Woman from Waimea',
                artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_6',
                albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_6',
                mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Sara-Joy+Liebig+%7C+Woman+from+Waimea+%7C+.mp3',
                play: false
            },
            {
              artist: 'Youth XL',
              songTitle: 'Text Your Friends',
              artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_6',
              albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_6',
              mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Youth+XL+-+Text+Your+Friends.mp3',
              play: false
          },
          {
            artist: 'Youth XL',
            songTitle: 'Gypsy Gia',
            artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_6',
            albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_6',
            mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Youth+XL+-+Gypsy+Gia.mp3',
            play: false
        },
        {
          artist: 'Justin Arena',
          songTitle: 'Oceans',
          artistThumbnail: 'UNSPLASH_URL_FOR_ARTIST_6',
          albumArtwork: 'UNSPLASH_URL_FOR_ALBUM_6',
          mp3url: 'https://ahoycollection.s3.us-east-2.amazonaws.com/Justin+Arena+-+Oceans.mp3',
          play: false
      },
        
              
      ],   
      searchTerm: '',
      filteredSongs: [],
      currentSong: null,
      currentSongTitle: '', // New property for song title
      currentArtist: '',
      playlists: {}, // Initialize empty playlists object
      selectedPlaylist: null, // Initialize selectedPlaylist to null
    },
    mounted() {
      this.filteredSongs = this.songs;
    },
    methods: {
      searchSongs() {
        if (this.searchTerm.trim() === '') {
          this.filteredSongs = this.songs;
          return;
        }
  
        this.filteredSongs = this.songs.filter(song => {
          return Object.values(song).some(value => 
            value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        });
      },
      togglePlay(song) {
        const audioPlayer = document.getElementById('audioPlayer');
        const source = audioPlayer.querySelector('source');
        if (this.currentSong === song.mp3url) {
            if (audioPlayer.paused) {
                audioPlayer.play();
                song.play = true;
                this.currentSong.play = true;
            } else {
                audioPlayer.pause();
                song.play = false;
                this.currentSong.play = false;
            }
        } else {
            source.src = song.mp3url;
            audioPlayer.load();
            audioPlayer.play();
            this.currentSong = song.mp3url; // Change the current song to the clicked one
            this.currentArtist = song.artist; // Update the current artist
            this.currentSongTitle = song.songTitle; // Update the current song title
            song.play = true;
        }
        
    }, // Closing brace for togglePlay method
      createPlaylist() {
        const newPlaylistName = document.getElementById("newPlaylistName").value;
        if (newPlaylistName.trim() !== '') {
            Vue.set(this.playlists, newPlaylistName, []);
            this.selectedPlaylist = newPlaylistName;  // Automatically select the newly created playlist
        }
    },
    addToPlaylist(song) {
        if (this.selectedPlaylist) {
            if (!this.playlists[this.selectedPlaylist]) {
                this.playlists[this.selectedPlaylist] = []; // Initialize if not already
            }
            this.playlists[this.selectedPlaylist].push(song);
        }
    },
    // ... (other parts remain unchanged)
},
watch: {
    playlists: {
        deep: true, // Watch object deeply
        handler() {
            this.selectedPlaylist = Object.keys(this.playlists)[0] || null; // Automatically set to first playlist if not selected
        }
    }
}
});




  
  
  
  
  
  