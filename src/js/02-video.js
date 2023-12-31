import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

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

player.on('timeupdate', throttle(setLocaleStorageData, 1000));









