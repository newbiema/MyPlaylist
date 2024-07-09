function playSong(id) {
            // Pause semua lagu
            var audios = document.querySelectorAll('audio');
            audios.forEach(audio => audio.pause());

            // Play lagu yang dipencet
            var song = document.getElementById(id);
            song.currentTime = 0;
            song.play();
        }

        function pauseSong(id) {
            var song = document.getElementById(id);
            song.pause();
        }

        function filterSongs() {
            var input, filter, songs, title, i, txtValue;
            input = document.getElementById('searchInput');
            filter = input.value.toLowerCase();
            songs = document.getElementsByClassName('lagu');

            for (i = 0; i < songs.length; i++) {
                title = songs[i].getElementsByClassName('lagu-title')[0];
                txtValue = title.textContent || title.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    songs[i].style.display = "";
                } else {
                    songs[i].style.display = "none";
                }
            }
        }