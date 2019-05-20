
let price;
let quantity;
let total;
let highPrice;
let lowPrice;


const tradeFee = (fee,quantity,price) => {
  total = (quantity * price) * fee;
  console.log(total);
};

tradeFee(0.00075,75,6);

