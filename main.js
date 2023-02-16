const player = document.querySelector('.audio'),
      play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      file = document.querySelector('.file'),
      next = document.querySelector('.next_btn')

const songs = ['1','2','3']
let songIndex = 0
function Song(x) {
    file.src = x +'.mp3'  
}
Song(songs[songIndex])

function playSong() {
    file.play()
    play.classList.add('hidden')
    pause.classList.remove('hidden')

}
function pauseSong() {
    file.pause()
    play.classList.remove('hidden')
    pause.classList.add('hidden')
}
play.addEventListener('click', () => {
    playSong();
})
pause.addEventListener('click', () => {
    pauseSong()
})
function nextSong() {
    songIndex++
    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    Song(songs[songIndex])
}
 next.addEventListener('click', () => {
    nextSong()
    playSong()
})