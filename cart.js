// ---------------------------

// Problem 1 - Print the total price for the following items.
// ---------------------------

// Break-up
// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem.

// Sum the final price of all the lineItems.

var UnitPrices = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var Discounts = {
  // values are percentages
  Apple: 10,
};

var Taxes = {
  // values are percentages
  Carrot: 5,
  Guava: 10,
};

var LineItems = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

var getDiscountPercent = function(productName){
  var discount = Discounts[productName];
  
  if(discount){
    return  discount/100;
  }
  else{
    return 0;
  }
  
}

var getTaxPercent = function(productName){
  var tax=Taxes[productName];
  if(tax){
    return  tax/100;
  }
  else{
    return 0;
  }
}

var getItemPrice = function(itemName){
  var unitPrice = UnitPrices[itemName];
  var getDiscount = getDiscountPercent(itemName)
  var discountPercent = unitPrice*getDiscount;
  var discountedPrice = unitPrice-discountPercent ;
  var getTax=getTaxPercent(itemName)
  var taxPercent=discountedPrice*getTax;
  var finalPrice = discountedPrice+taxPercent;
  
  return finalPrice;
}

var getLineItemPrice = function(lineItem){
  var itemName = lineItem["item"];
  var units = lineItem["units"];
  var itemPrice = getItemPrice(itemName)
  var lineItemPrice =  itemPrice*units;
  
  return lineItemPrice;
}

var getSum = function(){
  var i=0;
  sum=0;
  for(i=0;i<LineItems.length;i++){
    var  lineItem=LineItems[i];
    var lineItemPrice = getLineItemPrice(lineItem)
    sum=sum+lineItemPrice;
  }
  return sum;
}
console.log(getSum());

