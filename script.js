// ===============================
// Copy Counter
// ===============================

let copies = localStorage.getItem("copies") || 0;

const counter = document.getElementById("copyCounter");
if (counter) {
    counter.innerHTML = "📋 Scripts Copied: " + copies;
}

// ===============================
// Copy Script
// ===============================

function copyScript(script) {

    navigator.clipboard.writeText(script);

    copies++;

    localStorage.setItem("copies", copies);

    if (counter) {
        counter.innerHTML = "📋 Scripts Copied: " + copies;
    }

    const toast = document.getElementById("toast");
    const text = document.getElementById("toastText");

    if (toast && text) {

        text.innerHTML = "✅ Script Copied Successfully!";

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 2000);

    }

}

// ===============================
// Background Music
// ===============================

const music = document.getElementById("bgMusic");

if (music) {

    music.volume = 0.15;

    // Restore last position
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Save current position
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 1000);

    // Try to resume if previously playing
    if (localStorage.getItem("musicStarted") === "true") {
        music.play().catch(() => {});
    }

    // Start music on the FIRST interaction
    function startMusic() {

        music.play().then(() => {
            localStorage.setItem("musicStarted", "true");
        }).catch(() => {});

        document.removeEventListener("click", startMusic);
        document.removeEventListener("keydown", startMusic);
        document.removeEventListener("touchstart", startMusic);

    }

    document.addEventListener("click", startMusic);

    document.addEventListener("keydown", startMusic);

    document.addEventListener("touchstart", startMusic);

}

// ===============================
// Search Scripts
// ===============================

function searchScripts() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".searchable");

    let found = false;

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {

            card.style.display = "";

            found = true;

        } else {

            card.style.display = "none";

        }

    });

    const noResult = document.getElementById("noResult");

    if (noResult) {

        noResult.style.display = found ? "none" : "block";

    }

}

// ===============================
// Popup
// ===============================

const popup = document.getElementById("scriptPopup");

const popupTitle = document.getElementById("popupTitle");
const popupStatus = document.getElementById("popupStatus");
const popupVersion = document.getElementById("popupVersion");
const popupUpdated = document.getElementById("popupUpdated");

const popupCopy = document.getElementById("popupCopy");

let selectedScript = "";

function openPopup(title, status, version, updated, script) {

    popup.classList.add("active");

    popupTitle.innerHTML = title;

    popupStatus.innerHTML = status;

    popupVersion.innerHTML = version;

    popupUpdated.innerHTML = updated;

    selectedScript = script;

}

if (popupCopy) {
    popupCopy.onclick = function () {

        copyScript(selectedScript);

        popup.classList.remove("active");

    };
}

const closeBtn = document.querySelector(".closePopup");

if (closeBtn) {
    closeBtn.onclick = function () {

        popup.classList.remove("active");

    };
}

window.onclick = function (e) {

    if (e.target === popup) {

        popup.classList.remove("active");

    }

};

// ===============================
// Animated Background
// ===============================

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 40; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";

        p.style.animationDuration =
            (10 + Math.random() * 10) + "s";

        p.style.animationDelay =
            Math.random() * 10 + "s";

        p.style.opacity = Math.random();

        particles.appendChild(p);

    }

}

// ===============================
// Cursor Glow
// ===============================

const glow = document.getElementById("cursorGlow");

if (glow) {

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    document.querySelectorAll("button,a,.script-card").forEach(el => {

        el.addEventListener("mouseenter", () => {

            glow.style.width = "45px";
            glow.style.height = "45px";

        });

        el.addEventListener("mouseleave", () => {

            glow.style.width = "28px";
            glow.style.height = "28px";

        });

    });

}

/* ==========================
   Loading Screen
========================== */

const loader = document.getElementById("loader");

const progress = document.getElementById("loadingProgress");

const loadingText = document.getElementById("loadingText");

const messages = [

    "Initializing...",

    "Loading Scripts...",

    "Checking Updates...",

    "Preparing Interface...",

    "Welcome to IND HUB"

];

let percent = 0;

let step = 0;

const loading = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";

    if(percent === 20){

        loadingText.innerHTML = messages[1];

    }

    if(percent === 45){

        loadingText.innerHTML = messages[2];

    }

    if(percent === 70){

        loadingText.innerHTML = messages[3];

    }

    if(percent === 95){

        loadingText.innerHTML = messages[4];

    }

    if(percent >= 100){

        clearInterval(loading);

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },600);

        },400);

    }

},25);