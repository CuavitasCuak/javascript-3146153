const Video = document.querySelector("#video");
const playVideo = document.querySelector("#play-video");
const Stop = document.querySelector("#stop-video");
const Playstopimg1 = document.querySelector("#play-stop-img1");
const Playstopimg2 = document.querySelector("#play-stop-img2");
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");

// Play video 
function reproducirVideo() {
    Video.play();
    
}


//evento click para reproducir video
playVideo.addEventListener("click", reproducirVideo)


// Pausar video

function pausarVideo() {
    Video.pause()
}

//evento click para pausar video

Stop.addEventListener("click", pausarVideo)


//Toggle audio uno

function toggleAudioUno() {
    if (audio1.paused) {
        audio1.play();
        Playstopimg1.textContent = "Stop";
    } else {
        audio1.pause();
        Playstopimg1.textContent = "Play";
    }   

}

Playstopimg1.addEventListener("click", toggleAudioUno)
 


function toggleAudioDos() {
    if (audio2.paused) {
        audio2.play();
        Playstopimg2.textContent = "Stop";
    } else {
        audio2.pause();
        Playstopimg2.textContent = "Play";
    }   

}

Playstopimg2.addEventListener("click", toggleAudioDos)
