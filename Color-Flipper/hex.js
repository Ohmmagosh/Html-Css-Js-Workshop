(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btnElem = document.getElementById('btn');
    const colorElem = document.querySelector('.color')

    function getRandomNumber(){
        return Math.floor(Math.random() * hex.length)
    }

    
    function onClick(){
        let hexColor = '#'
        for(let i = 0;i<6;i++){
            hexColor += hex[getRandomNumber()]
        }
        colorElem.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    }

    function run(){
        btn.addEventListener('click', onClick)
    }

    run();
})();


