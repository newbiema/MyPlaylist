       
       // Play and Pause functionality
       function playSong(id) {
        const audio = document.getElementById(id);
        audio.play();
    }

    function pauseSong(id) {
        const audio = document.getElementById(id);
        audio.pause();
    }
    
    // Filter songs functionality
    function filterSongs() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const songs = document.querySelectorAll('.lagu');
        const noSongsMessage = document.getElementById('noSongsMessage');
        let hasVisibleSongs = false;

        songs.forEach(song => {
            const title = song.getAttribute('data-title').toLowerCase();
            if (title.includes(searchInput)) {
                song.style.display = ''; // Tampilkan lagu
                hasVisibleSongs = true;
            } else {
                song.style.display = 'none'; // Sembunyikan lagu
            }
        });

        // Tampilkan pesan jika tidak ada lagu yang cocok
        noSongsMessage.classList.toggle('hidden', hasVisibleSongs);
    }
    
       
       // Scroll to the content section
        function scrollToContent() {
            document.getElementById("music").scrollIntoView({
                behavior: "smooth"
            });
        }

        // Get form and input element
        const form = document.querySelector('form');
        const songRequestInput = document.getElementById('songRequest');
        
        // Modify the form action dynamically to include the song request
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally
            const songName = songRequestInput.value.trim();
            if (songName) {
                const waUrl = `https://wa.me/6287892219615/?text=min%20saya%20ingin%20request%20lagu%20${encodeURIComponent(songName)}`;
                window.open(waUrl, '_blank'); // Open WhatsApp with the message
            }
        });