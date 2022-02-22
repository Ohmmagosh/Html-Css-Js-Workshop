(()=>{
    function run (){
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", ()=>{
            console.log(
                button.closest("tr")
            );
        })
    });
    }
    run();
})();