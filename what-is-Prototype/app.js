(() => {
    // 1. class vs Prototype
    // class Person {

    // }

    // const ohm = new Person();
    // console.log(ohm);

    // 2. What's prototype

    // const name = 'Ohmaaagoch';
    // console.log(name);

    // const arr = [];
    // console.log(arr.__proto__);

    // 3. Prototype chain
    // const name = 'OHm';
    // console.log(name.__proto__);

    // console.log(name.toLocaleString());
    
    const name = 'OHM';

    function sayHello(val){
        console.log(`Hello ${val}`);
    }
    String.prototype.sayHello = sayHello;
    console.log(name.__proto__);

    name.sayHello('World')

    // 4. Extend a prototype
})();