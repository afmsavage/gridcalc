//
//  Simple grid trading calculator
//
// v0.1 
// 2019-06-03 

// DOM Mappings
let gridValues = document.getElementById('gridValues');
let oneGridsProfit = document.getElementById('oneGridsProfit');
let calcButton = document.getElementById('calcButton');
// text fields
let domHighPrice = document.getElementById('domHighPrice');
let domLowPrice = document.getElementById('domLowPrice');
let domQtyPerGrid = document.getElementById('domQtyPerGrid');
let domTradingFee = document.getElementById('domTradingFee');
let domGridAmmt = document.getElementById('domGridAmmt');
let domPrecision = document.getElementById('domPrecision');

// leave be
let gridsArray = [];
let oneTradeFee;

// set these variables
let highPrice;
let lowPrice;
let quantity;
let fee;
let gridsAmmt;
let precision;

// get the prices at which grids will occur and push them into the array gridsArray
const findGridPrices = (highPrice, lowPrice, gridsAmmt, precision) => {
  let gridPrice = (highPrice - lowPrice) / gridsAmmt;
  let gridStep = parseFloat(lowPrice);
  for (i=0; i < gridsAmmt; i++) {
    gridStep += gridPrice;
    gridsArray.push(gridStep.toFixed(precision));
  }
};

// figure out the fee for one side of the trade
const findTradeFee = (fee, quantity, price) => {
  feeTotal = (quantity * price) * fee;
  oneTradeFee = feeTotal.toFixed(precision);
};

calcButton.addEventListener('click', function() {
 
  highPrice = domHighPrice.value;
  lowPrice = domLowPrice.value;
  quantity = domQtyPerGrid.value;
  fee = domTradingFee.value;
  gridsAmmt = domGridAmmt.value;
  precision = domPrecision.value;

  findGridPrices(highPrice, lowPrice, gridsAmmt,precision);
  findTradeFee(fee,quantity,gridsArray[0]);

  let oneGridProfit = (gridsArray[1] - gridsArray[0]) * quantity - oneTradeFee;

  gridValues.innerText = gridsArray;
  oneGridsProfit.innerText = parseFloat(oneGridProfit.toFixed(precision));
});