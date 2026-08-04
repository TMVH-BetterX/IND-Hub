function copyScript(script){

    navigator.clipboard.writeText(script);

    alert("✅ Script copied successfully!");

}

const music = document.getElementById("bgMusic");
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
