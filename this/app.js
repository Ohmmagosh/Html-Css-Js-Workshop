(()=>{

    // 1.lexcical scope & Dynamic scope
    // function printName(){
    //     console.log(this);
    // }
    // printName();
    // 2. How to know what is "this"?
    // function printName(){
    //     console.log(this);
    //     console.log(`My name is ${this.name}`);
    // }

    //     2.1 invoker Object
    // const ohmaaagoch = {name: 'Ohm', printName};
    // const jane = { name: 'Jane', printName};

    // ohmaaagoch.printName();
    // jane.printName();
    
    //     2.2 global ob ject (window, global)
    // name = 'Global';
    
    // printName();
    //     2.3 constructor function
    // function Person(name){
    //     this.name = name;
    //     this.printName = printName;
    // }
    // const ohmaaagoch = new Person('Ohm');
    // ohmaaagoch.printName();

    // 3.call(), apply(), and bind()
    function printName(nationality, city){
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);   
    }

    function Person(name, nationality, city){
        this.name = name;
        this.nationality = nationality;
        this.city = city;

        printName(this.nationality, this.city);
        printName.call(this, this.nationality, this.city);
        printName.apply(this, [this.nationality, this.city]);

        const printOhmaaagoch = printName.bind(this);
        printOhmaaagoch(this.nationality, this.city)
    }

    const ohmaaagoch = new Person('Ohm', 'Thai', 'Bangkok');
})();