(()=>{

    // 1. How Asynchronous code works in javascript
    function simulateAsyncAPI(text, timeout){
        setTimeout(()=> console.log(text), timeout);
    }

    simulateAsyncAPI('A', 1000);
    simulateAsyncAPI('B', 900);
    simulateAsyncAPI('C', 800);
    simulateAsyncAPI('D', 700);
    simulateAsyncAPI('E', 600);

    //2. Callback
    function simulateAsyncAPI2(text, timeout, callback){
        setTimeout(()=>{
            console.log(text);

            if (callback){
                callback();
            }
        }, timeout);
        
        
    }
    //callback hell
    simulateAsyncAPI2('A', 1000, ()=>{
        simulateAsyncAPI2('B', 900, ()=>{
            simulateAsyncAPI2('C', 800, ()=>{
                simulateAsyncAPI2('D', 700, ()=>{
                    simulateAsyncAPI2('E', 600)
                });
            });
        });
    });
    //3. Promise
    function simulateAsyncAPI3(text, timeout){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (text === 'B') return reject('B got rejected')
                console.log(text);
                resolve();
            },timeout)
        })
    }

    simulateAsyncAPI3('Promised A', 1000)
        .then(()=>{
            return simulateAsyncAPI3('Promised B', 900)
        })
        .then(()=>{
            return simulateAsyncAPI3('Promised C', 800)
        })
        .catch((error) => {
            console.error(error);
        })
    //4. Async/Await
    function simulateAsyncAPI4(text, timeout){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // if (text === 'B') return reject('B got rejected')
                console.log(text);
                resolve();
            },timeout)
        })
    }

    async function run(){
        try{
            await simulateAsyncAPI4('async A', 1000)
            await simulateAsyncAPI4('async B', 1000)
            await simulateAsyncAPI4('async C', 1000)
        } catch (error){
            console.error(error);
        }
        
    }
    run();

})();