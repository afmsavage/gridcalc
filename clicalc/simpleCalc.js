//
//  Simple grid trading calculator
//
// v0.1 
// 2019-06-03 

// leave be
let gridsArray = [];
let oneTradeFee;

// set these variables
let precision = 8;
let gridsAmmt = 10;
let highPrice = 0.00001;
let lowPrice = 0.000005;
let quantity = 500;
let fee = 0.00075;

// get the prices at which grids will occur and push them into the array gridsArray
const findGridPrices = (highPrice, lowPrice, gridsAmmt, precision) => {
  let gridPrice = (highPrice - lowPrice) / gridsAmmt;
  let gridStep = lowPrice;
  for (i=0; i < gridsAmmt; i++) {
    gridStep += gridPrice;
    gridsArray.push(gridStep.toFixed(precision));
  }
};

findGridPrices(highPrice, lowPrice, gridsAmmt, precision);

// figure out the fee for one side of the trade
const findTradeFee = (fee, quantity, price) => {
  feeTotal = (quantity * price) * fee;
  oneTradeFee = feeTotal.toFixed(precision);
};

findTradeFee(fee,quantity,gridsArray[0]);

// figure out the profit from one grid
let oneGridProfit = (gridsArray[1] - gridsArray[0]) * quantity - oneTradeFee;
console.log(oneGridProfit.toFixed(precision)); // 0.00024794