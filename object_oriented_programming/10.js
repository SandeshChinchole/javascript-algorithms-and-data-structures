// Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");