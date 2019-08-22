function Bank () {
    this.customers= {}
    
    
  }
  
  
  
  Bank.prototype.addCostumer=function(costumer){   return this.costumers.push(costumer)} 
  //seems like push() does not work with objects; what is the way to do add elemnts cumulatively into a member of an object? 
  
  // ! indeed, objects do not have the method push. what you could do is create a property of the object like this:
  // this.customers[customer] = 0
  // when you console.log this.customers, there would be a property of the customer and the value would be 0 (initial amount)
  
  
  Bank.prototype.printAccount=function(){
    console.log ( this.costumer + "account is" + deposit)
  }
  
  Bank.prototype.deposit= function (costumer, amount) {
    return this.deposit+=amount
  }
  
    
  Bank.prototype.withdraw= function (costumer, amount) {
    return this.deposit-amount
  }
  
  var bank = new Bank();
  bank.addCustomer("Sheldon");
  bank.printAccount("Sheldon"); 
  //ouput: bank.addcostumer is not a function --why?
  // ! because you have a typo: customer != costumer
  bank.deposit ("Sheldon", 10)
  bank.printAccount("Sheldon"); 
  bank.withdraw("Sheldon", 9);

  