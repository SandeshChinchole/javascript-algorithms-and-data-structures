const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  const tea4GreenTeamFCC = getTea(prepareBlackTea, 13);
  const tea4BlackTeamFCC = getTea(prepareGreenTea, 27);