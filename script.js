
console.log('Welcome to spotify');
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Cheques - shubh", filePath: "songs/1.mp3", coverPath: "cover.jpg" },
    { songName: "We Rollin", filePath: "songs/2.mp3", coverPath: "cover.jpg" },
    { songName: "Bikhra", filePath: "songs/3.mp3", coverPath: "cover.jpg" },
    { songName: "Buddhu-sa-maan", filePath: "song/4.mp3", coverPath: "cover.jpg" },
    { songName: "Dhundhala", filePath: "songs/5.mp3", coverPath: "cover.jpg" },
    { songName: "Gone-girl", filePath: "songs/6.mp3", coverPath: "cover.jpg" },
    { songName: "Heeriye Aa", filePath: "songs/7.mp3", coverPath: "cover.jpg" },
    { songName: "Pasuri", filePath: "songs/8.mp3", coverPath: "cover.jpg" },
    { songName: "Sohneya parada ni", filePath: "songs/9.mp3", coverPath: "cover.jpg" },
    { songName: "Tere waste", filePath: "songs/10.mp3", coverPath: "cover.jpg" },
]
//audioElement.play();

songItems.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})



//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to Events

audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    //Update seekbar
    progress = ((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e);
        if (e.target.classList[2] == 'fa-circle-play') {
            makeAllPlay();
            element.classList.remove('fa-circle-play')
            element.classList.add('fa-circle-pause')
            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex + 1}.mp3`
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else {
            audioElement.pause();
            element.classList.remove('fa-circle-pause')
            element.classList.add('fa-circle-play')
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    })
})



document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})