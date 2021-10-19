const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fareMultiplier => fare => fareMultiplier * fare;

const fareDoubler = fareRate => createFareMultiplier(2)(fareRate);

const fareTripler = fareRate => createFareMultiplier(3)(fareRate);

const selectDifferentDrivers = (driverList, whichDrivers) => whichDrivers(driverList);