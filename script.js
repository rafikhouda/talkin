function changeSurah(videoId) {
    document.getElementById("quranVideo").src = "https://www.youtube.com/embed/" + videoId;
}


function playSurah(src) {
    const audioContainer = document.getElementById('audio-container');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = src;
    audioPlayer.play();
    audioContainer.style.display = 'block';
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".menu-toggle");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        toggleButton.textContent = "✖";
    } else {
        toggleButton.textContent = "☰";
    }
}