(() =>{
    const colors =["green", "red", "rgba(133, 122, 200)", "#f15025"];
    const btn = document.getElementById('btn');
    const color = document.querySelector('.color');

    function onClick(){
        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber]
    }

    function getRandomNumber(){
        return Math.floor(Math.random() * colors.length);
    }

    function run(){
        btn.addEventListener('click', onClick)
    }
    run();
})();