document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentSongElement = document.getElementById('current-song');
    const playlistItems = document.querySelectorAll('#playlist li');
    
    let currentSongIndex = 0;
    let isPlaying = false;
  
    function loadSong(index) {
      const song = playlistItems[index].dataset.src;
      audioPlayer.src = song;
      currentSongElement.textContent = playlistItems[index].textContent;
      playSong();
    }
  
    function playSong() {
      audioPlayer.play();
      isPlaying = true;
      playBtn.textContent = 'Pause';
    }
  
    function pauseSong() {
      audioPlayer.pause();
      isPlaying = false;
      playBtn.textContent = 'Play';
    }
  
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    });
  
    prevBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
      loadSong(currentSongIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
      loadSong(currentSongIndex);
    });
  
    playlistItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(index);
      });
    });
  
    // Load the first song by default
    loadSong(currentSongIndex);
  });
  
