// Understand Where an Object’s Prototype Comes From

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));
