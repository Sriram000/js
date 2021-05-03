// Write a programme to impact the balances of the given accounts, based on their transactions.
// Print the final balance for all the accounts with account number, name and balance amount.

/*
---------------------------

Problem 1 - Print the total price for the following items.
---------------------------

Break-up
Compute final price for an item
  Get unit price
  Compute item discount
  Compute tax on item
  Compute final price

Compute the price for a lineItem.

Sum the final price of all the lineItems.
*/

const Accounts = [
  {
    name: "Arun",
    accountNo: 1,
  },
  {
    name: "Babu",
    accountNo: 2,
  }
];
const Balances = {
  // accountNo: balance
  "1": 5000,
  "2": 2000,
};
const Transactions = [
  {
    accountNo: 1,
    type: "withdrawal",
    amount: 1000,
  },
  {
    accountNo: 1,
    type: "deposit",
    amount: 500,
  },
  {
    accountNo: 1,
    type: "withdrawal",
    amount: 1000,
  },
  {
    accountNo: 2,
    type: "deposit",
    amount: 300,
  },
  {
    accountNo: 2,
    type: "withdrawal",
    amount: 200,
  }
];

var updateBalancesWithTransaction = function(transaction) {
  
  var accountNo = transaction["accountNo"];
  var amount = transaction["amount"];
  var type = transaction["type"];
  var impact = type == "withdrawal" ? -amount : amount;
  
  Balances[accountNo] += impact;
}

var updateBalancesWithTransactions = function() {
  // Implement transaction code here.
  
  var n = Transactions.length;
  
  for(i = 0; i < n; i++) {
    updateBalancesWithTransaction(Transactions[i]);
  }
};

var displayBalance = function(account) {
  var name = account["name"];
  var accountNo = account["accountNo"];
  var balance = Balances[accountNo];
  
  console.log(accountNo," | ",name," | ",balance);
}

var displayBalances = function() {
  // Implement display code here.
  var n = Accounts.length;
  console.log("\nAcNo | Name | Balance");
  
  for(i = 0; i < n; i++) {
    displayBalance(Accounts[i]);
  }	
};

var main = function() {
  console.log('Balances before transactions');
  displayBalances();
  updateBalancesWithTransactions();
  console.log('\nBalances after transactions');
  displayBalances();
}

main();
