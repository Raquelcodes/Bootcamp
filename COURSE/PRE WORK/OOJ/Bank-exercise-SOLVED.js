

function Bank () {
  this.customers= {}
  
}



  Bank.prototype.addCustomer=function(customer){  this.customers[customer]=0
  console.log( this.customers)}


Bank.prototype.printAccount=function(customer){

  
  console.log ( customer + " account is " + this.customers[customer])
}

Bank.prototype.deposit= function (customer, amount) {

console.log(this.customers[customer]+=amount)
}

  
Bank.prototype.withdraw= function (customer, amount) {
return (this.customers[customer]-=amount)
  
}

var bank = new Bank();
bank.addCustomer("Sheldon");
bank.printAccount("Sheldon"); 
bank.deposit ("Sheldon", 8)
bank.printAccount("Sheldon"); 
bank.withdraw("Sheldon", 8);
bank.printAccount("Sheldon"); 
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldon'); // this should print 'Sheldon account is 10'
bank.printAccount('Raj'); 