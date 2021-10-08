
const prepareBlackTea = () => "black tea";
const prepareGreenTea = () => "green tea";

const getTea = (typeOfTea, numOfCups) => {
    const teaCups = [];
    for(let cup = 1; cup <= numOfCups; cup++){
        let teaCup = typeOfTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4BlackTeamFCC, tea4GreenTeamFCC);