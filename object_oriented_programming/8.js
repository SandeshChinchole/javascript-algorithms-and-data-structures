// Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
const myHouse = new House(6);
myHouse instanceof House;