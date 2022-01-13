(() => {
  const audioElem = document.querySelector("audio");
  const playBtnElem = document.querySelector(".play");
  const progressbarElem = document.querySelector(".progress-bar");
  const startTimeElem = document.querySelector(".start-time");
  const endTimeElem = document.querySelector(".end-time");

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = 'pause';
    } else {
      audioElem.pause();
      playBtnElem.className = 'play';
    }
  }

  function getDuration(time){
    const minutes = Math.floor(time / 60 % 60).toString();
    const second = Math.floor(time % 60).toString().padStart(2, 0);

    return `${minutes}:${second}`
  }

  function onTimeUpdate(){
    startTimeElem.innerHTML = getDuration(audioElem.currentTime);
    progressbarElem.value = audioElem.currentTime
    
  }

  function onLoadedData(){
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressbarElem.max = audioElem.duration;
  }

  function onInput(){
    audioElem.currentTime = progressbarElem.value
  }

  function onEnded(){
    playBtnElem.className = 'play';
    audioElem.currentTime = 0;
  }

  function run() {
    playBtnElem.addEventListener("click", onClick);

    audioElem.addEventListener('timeupdate', onTimeUpdate);
    audioElem.addEventListener('loadeddata', onLoadedData);
    audioElem.addEventListener('ended', onEnded);

    progressbarElem.addEventListener('input', onInput);
  }

  run();
})();
