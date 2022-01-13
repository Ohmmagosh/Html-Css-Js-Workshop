(() => {
    const message = new SpeechSynthesisUtterance();

    function onVoiceschanged(){
        const voices = speechSynthesis.getVoices();
        const thVoice = voices.find(voice => voice.lang === 'th-TH')
        message.voice = thVoice;
    }

    function onClick(event){
        message.text = event.target.getAttribute('alt');
        speechSynthesis.speak(message);
    }

    function run(){
        speechSynthesis.addEventListener('voiceschanged', onVoiceschanged);

        const imgElem = Array.from(document.querySelectorAll('img'));
        imgElem.forEach(imgElem => imgElem.addEventListener('click', onClick));
    }

    run();
})();