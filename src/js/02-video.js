import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(evt) {
  const currentTime = evt.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}

const targetTime =
  parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(targetTime);
