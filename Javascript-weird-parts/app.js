(() => {

    
    // 1. NaN Not a number
    // if ( NaN === NaN ){
    //     console.log('Equal');
    // }

    // const result = 1 / 'hello';
    // console.log(result);
    // if (result === NaN){
    //     console.log('Equal to NaN');
    // }

    // if (Number.isNaN(result)){
    //     console.log('Equal to NaN');
    // }

    // 2. Type coercion
    if (3 > 2 > 1){
        console.log('Inside');
    }

    console.log(2 - '1');
    console.log(2 + '1');
    console.log(2 + Number.parseInt('1'));
    console.log(true + true + true);

    // 3. Interpreter & Complier
    function getPerson(){
        return {
            name: 'Ohm'
        };
    }

    console.log(getPerson());

    // 4. Checking Object Type
    const person = {};
    if (typeof person === 'object' && person !== null){
        console.log('Yes, Object');
    }
})();
