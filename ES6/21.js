// Use getters and setters to Control Access to an Object

class Thermostat {
    constructor(ftemp) {
      const ctemp = 5/9 * (ftemp - 32);
      this._temp = ctemp;
    }
    get temperature() {
      return this._temp;
    }
    set temperature(celciustemp) {
      this._temp = celciustemp;
    }
  }
  
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;