(() => {
    const SECOUND = 1000;
    const MINUTE = SECOUND * 60;
    const HOURS = MINUTE * 60;
    const DAY = HOURS * 24 ;

    function setElementInnerText(id, text){
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown(){
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2022 23:59:59').getTime();
        const unixTimeleft = newYear - now;

        setElementInnerText('days', Math.floor(unixTimeleft / DAY));   
        setElementInnerText('hours', Math.floor(unixTimeleft % DAY / HOURS));
        setElementInnerText('minutes', Math.floor(unixTimeleft % HOURS / MINUTE));
        setElementInnerText('secounds', Math.floor(unixTimeleft % MINUTE / SECOUND));
    }
    function run(){
        countDown();
        setInterval(countDown, SECOUND)
    }
    run();
})();