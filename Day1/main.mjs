 export class Animal {
    constructor (name){
        this.name = name;
    }
    sayName() {
        console.log(`My Name is  ${this.name}`)
    }
}
// const animal = new Animal("Scooby");
// animal.sayName();