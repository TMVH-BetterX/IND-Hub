function copyScript(script){

    navigator.clipboard.writeText(script);

    alert("✅ Script copied successfully!");

}

const music = document.getElementById("bgMusic");

music.volume = 0.25; // Change to 0.3, 0.4, 0.5 if you want it louder

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function () {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

};
