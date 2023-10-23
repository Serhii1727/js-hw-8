import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const playerRef = document.querySelector('#vimeo-player')

const player = new Player(playerRef);

const setLocaleStorageData = (event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds)
}

const currentSeconds = () => {
    
    const currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) {
        return player.setCurrentTime(currentTime);
    } 

    return player.setCurrentTime(0)
}

currentSeconds()

player.on('timeupdate', throttle(setLocaleStorageData, [wait=1000]));









