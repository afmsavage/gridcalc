
let fee;
let quantity;
let price;
let highPrice;
let lowPrice;
let grids;

const tradeFee = (fee, quantity, price) => {
  total = (quantity * price) * fee;
  console.log(total);
};

const grid = (highPrice, lowPrice, grids) => {
  let gridPrice = (highPrice - lowPrice) / grids;
  // console.log(gridPrice);
  for (i=0; i <= grids; i++) {
    let gridStep = (lowPrice + gridPrice) * i;
    console.log(gridStep);
  }

};

grid(2, 1, 10); // 1, 1.1,1.2... 2
tradeFee(0.00075,75,6); // 0.3375

