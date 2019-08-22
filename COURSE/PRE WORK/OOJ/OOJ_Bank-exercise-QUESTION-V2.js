function Bank () {
  this.customers= {}
  
  
}



  Bank.prototype.addCustomer=function(customer){  
      
      /* What you want is an object that looks like this
      
      {  sheldon : 0, Raquel : 0 }
        
        What you currently have is { sheldon = "sheldon" }
      
      */
      
      this.customers[customer]=customer
      // the value of the object should be the balance:
     // this.customers[customer]= 0
     
  return this.customers}
  
  


Bank.prototype.printAccount=function(customer){
    
 this.balance=this.deposit-this.withdraw
  
  console.log ( this.customers[customer]+ " account is " + this.balance)
                   //customer                        //this.customers[customer]
  
} 
//stuck on getting this function to work properly- not sure if i can just subtract the deposit and withdraw like this?output is "NaN"...

Bank.prototype.deposit= function (customer, amount) {
 return  this.deposit[customer]+=amount
        // you are returning the same thing (Bank.prototype.deposit === this.deposit because you are inside the function)
        // hint: you should be adding to the value of the customer: { sheldon: 0 + 10 }
}//also this function is NaN outputting

  
Bank.prototype.withdraw= function (customer, amount) {
 return this.withdraw[customer]+=amount
  
}//same as deposit - this function is NaN outputting

var bank = new Bank();
bank.addCustomer("Sheldon");
bank.printAccount("Sheldon"); 
bank.deposit ("Sheldon", 10)
bank.printAccount("Sheldon"); 
bank.withdraw("Sheldon", 9);
bank.printAccount("Sheldon"); 
