const music = new Audio();
const songs = [
    {
        id: 1,
        songName: 'Hey Rangule<br><div class="subtitle">Ramya behara,G.V.prakash</div>',
        poster:"img/1.jpeg"
    },
    {
        id: 2,
        songName: 'Oh Sita Hey Rama<br><div class="subtitle">Sindhuri,Vishal chandrashekar</div>',
        poster:"img/2.jpg"

    },
    {
        id: 3,
        songName: 'Yenthasakkagunnave<br><div class="subtitle">Devi sri prasad</div>',
        poster:"img/3.jpg"
    },
    {
        id: 4,
        songName: 'Chinnadhovypu<br><div class="subtitle">Sukhwinder singh,Thaman s</div>',
        poster:"img/4.jpeg"
    },
    {
        id: 5,
        songName: 'Oo Antava Oo Oo Antava<br><div class="subtitle">Indravathi chauhan,Devi sri prasad</div>',
        poster:"img/5.jpg"
    }, 
    {
        id: 6,
        songName: 'Kurchimadathapetti<br><div class="subtitle">Sahiti chaganti,Thaman s</div>',
        poster:"img/6.jpg"
    },
    {
        id: 7,
        songName: 'Neekannuneelisamudram<br><div class="subtitle">Javes ali</div>',
        poster:"img/7.jpg"
    },
    {
        id: 8,
        songName: 'Buttabomma<br><div class="subtitle">Armaan malik</div>',
        poster:"img/8.jpg"
    },
    {
        id: 9,
        songName: 'Panchadara Bomma<br><div class="subtitle">Anuj gurwara,Rita</div>',
        poster:"img/9.webp"
    },
    {
        id: 10,
        songName: 'Suvvi Suvvalamma<br><div class="subtitle">N.C.karunya</div>',
        poster:"img/10.jpeg"
    },
    {
        id: 11,
        songName: 'Priya Mithunam<br><div class="subtitle">Karthik,Swethamohan</div>',
        poster:"img/11.jpg"
    },
    {
        id: 12,
        songName: 'Peelings<br><div class="subtitle">Shankar babu,Laxmi dasa</div>',
        poster:"img/12.jpg"
    },
    {
        id: 13,
        songName: 'Arabic Kuthu<br><div class="subtitle">Joitha Gandhi,Anirudh ravichandran</div>',
        poster:"img/13.jpg"
    },
    {
        id: 14,
        songName: 'Dandakadiyal<br><div class="subtitle">Bheems ceociroleo</div>',
        poster:"img/14.jpeg"
    },
    {
        id: 15,
        songName: 'Chuttamalle<br><div class="subtitle">Shilpa rao,Anirudh ravichndran</div>',
        poster:"img/15.jpg"
    },
    {
        id: 16,
        songName: 'Sooreede<br><div class="subtitle">Harini ivathuri,Ravi basrur</div>',
        poster:"img/16.jpg"
    },
    {
        id: 17,
        songName: 'Premalo<br><div class="subtitle">Anurag kulakarni</div>',
        poster:"img/17.jpg"
    },
    {
        id: 18,
        songName: 'College Papa<br><div class="subtitle">Keertahana sharama,Bheems ceciroleo</div>',
        poster:"img/18.jpg"
    },
    {
        id: 19,
        songName: 'Naatu Naatu<br><div class="subtitle">Rahul sipligunj,Kaala bhairava</div>',
        poster:"img/19.jpg"
    },
    {
        id: 20,
        songName: 'Jaragandi<br><div class="subtitle">Daler mehndi,Anatha sriram,sunidhi chauhan,Thaman s</div>',
        poster:"img/20.jpg"
    },
    {
        id: 21,
        songName: 'Dhop<br><div class="subtitle">Roshini,Shruthi rajani,Thaman s</div>',
        poster:"img/21.jpg"
    },
    {
        id: 22,
        songName: 'Ninnele<br><div class="subtitle">Shreyaghoshal,Anurag kulakarni</div>',
        poster:"img/22.jpeg"
    },
    {
        id: 23,
        songName: 'Idhedho Bagundhe<br><div class="subtitle">Anitha karthikeyan,Vijay prakash</div>',
        poster:"img/23.jpg"
    },
    {
        id: 24,
        songName: 'Omadhu<br><div class="subtitle">Adhan sami,Devi sri prasad</div>',
        poster:"img/24.jpg"
    },
    {
        id: 25,
        songName: 'Kannanesharinchura<br><div class="subtitle">Nayana nair</div>',
        poster:"img/25.jpg"
    },
    {
        id: 26,
        songName: 'A vchi B pai vale<br><div class="subtitle">Mathangi,MM keravani</div>',
        poster:"img/26.jpg"
    },
    {
        id: 27,
        songName: 'Pandaga Chesko<br><div class="subtitle">Geetha madhuri,Thaman s</div>',
        poster:"img/27.jpg"
    },
    {
        id: 28,
        songName: 'Hyper<br><div class="subtitle">Geetha madhuri,Dhanunjay</div>',
        poster:"img/28.jpg"
    },
    {
        id: 29,
        songName: 'Hey Akhil<br><div class="subtitle">Rahul pandey,Anup rubens</div>',
        poster:"img/29.jpg"
    },
    {
        id: 30,
        songName: 'Koppamga Koppamga<br><div class="subtitle">Aarman malik,thaman s</div>',
        poster:"img/30.jpg"
    },
    {
        id: 31,
        songName: 'Pilla Raa<br><div class="subtitle">Anurag Kulakarni</div>',
        poster:"img/31.jpg"
    },
    {
        id: 32,
        songName: 'Maate Vinaduga<br><div class="subtitle">Sid Sriram</div>',
        poster:"img/32.jpg"
    },
    {
        id: 33,
        songName: 'Adiga Adiga<br><div class="subtitle">Sid Sriram</div>',
        poster:"img/33.jpg"
    },
    {
        id: 34,
        songName: 'Teliseney Na Nuvve<br><div class="subtitle">Revanth</div>',
        poster:"img/34.jpg"
    },
    {
        id: 35,
        songName: 'Uppenantha<br><div class="subtitle">KK,Devi Sri Prasad</div>',
        poster:"img/35.jpg"
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = ' rgb(105 ,105,105, .0)';
    });
};

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

// Elements for play/pause
let masterPlay = document.getElementById('masterPlay');
let Wave = document.querySelector('.wave');
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let currentPlayingIndex = null;

// Play/pause event for master play button
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        Wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        Wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// Function to update the UI for the currently playing song
const updatePlayingUI = (index) => {
    music.src = `audio/${songs[index].id}.mp3`; // Set the correct audio source
    poster_master_play.src = songs[index].poster; // Set the correct poster
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // Update the title dynamically
    title.innerHTML = songs[index].songName;
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105,105,105,.1)";
    makeAllplays();
    Array.from(document.getElementsByClassName('playListPlay'))[index].classList.remove('bi-play-circle-fill');
    Array.from(document.getElementsByClassName('playListPlay'))[index].classList.add('bi-pause-circle-fill');
    Wave.classList.add('active1');
    currentPlayingIndex = index; // Update the current playing index
};

// Handle the click event for each song in the playlist
Array.from(document.getElementsByClassName('playListPlay')).forEach((e, i) => {
    e.addEventListener('click', (el) => {
        if (currentPlayingIndex === i) {
            music.pause();
        } else {
            index = i; // Get the song index based on click
            updatePlayingUI(index);
        }
    });
});

// Scroll functionality for the popular songs
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

// Scroll functionality for the popular artists
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentend.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentstart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = songs.length - 1;
    }
    updatePlayingUI(index);
});

next.addEventListener('click', () => {
    index += 1;
    if (index >= songs.length) {
        index = 0;
    }
    updatePlayingUI(index);
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all play buttons in the "Popular Songs" section
    const playButtons = document.querySelectorAll('.popular_songs .pop_song .playListplay');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (currentPlayingIndex === index + 14) {
                music.pause();
            } else {
                updatePlayingUI(index + 14); // Adjust index to match the song ID in the songs array
            }
        });
    });

    // Optional: If you want to add pause functionality when the same button is clicked again:
    music.addEventListener('playing', () => {
        playButtons.forEach(button => {
            button.classList.remove('bi-play-circle-fill');
            button.classList.add('bi-pause-circle-fill');
        });
        if (currentPlayingIndex !== null) {
            playButtons[currentPlayingIndex - 14].classList.add('bi-pause-circle-fill');
            playButtons[currentPlayingIndex - 14].classList.remove('bi-play-circle-fill');
        }
    });

    // Handle the end of the song and reset the play button
    music.addEventListener('pause', () => {
        playButtons.forEach(button => {
            button.classList.remove('bi-pause-circle-fill');
            button.classList.add('bi-play-circle-fill');
        });
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        Wave.classList.remove('active1');
    });

    // Auto play next song when current song ends
    music.addEventListener('ended', () => {
        next.click();
    });
});