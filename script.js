document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoPlayer");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var stopBtn = document.getElementById("stopBtn");
    var seekBar = document.getElementById("seekBar");
    var timeDisplay = document.getElementById("timeDisplay");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    stopBtn.addEventListener("click", function() {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.textContent = "Play";
    });

    video.addEventListener("timeupdate", function() {
        seekBar.value = (video.currentTime / video.duration) * 100;
        timeDisplay.textContent = formatTime(video.currentTime);
    });

    seekBar.addEventListener("input", function() {
        video.currentTime = (seekBar.value / 100) * video.duration;
    });

    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    }
});