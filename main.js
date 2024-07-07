function playSong(id) {
        
    var audios = document.querySelectorAll('audio');
    audios.forEach(audio => audio.pause());

    
    var song = document.getElementById(id);
    song.currentTime = 0;
    song.play();
}

function pauseSong(id) {
    var song = document.getElementById(id);
    song.pause();
}