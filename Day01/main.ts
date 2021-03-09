//parent class
class Account{
    //Attrbuites
    private acc_Num:number;
    private balance:number;
    //Methods
    public debitAmount(){};
    public creditAmount(){};
    public getBalance(){};
    //Getter and Setter
    getAccountNumber(){return this.acc_Num;}
    getBalanceValue(){return this.balance;}
    setAccountNumber(_value){this.acc_Num=_value;}
    setBalance(_value){this.balance=_value;}
    //Constructor
    constructor(_accountNum,_balance){
        this.acc_Num=_accountNum;
        this.balance=_balance;
    }
}

//Interface
interface IAccount{
    date_of_opening:Date;
  
    //Abstract Methods
    addCustomer();
    removeCustomer();
  
  }
  
  //inhertance 
  class Saving_Account extends Account implements IAccount{
      //Own attributes
      min_balance:number;
      date_of_opening:Date;
      //assign values
      constructor(_acc_num,_balance,_min,_date){
          super(_acc_num,_balance);
          this.min_balance=_min;
          this.date_of_opening =_date;
        }
      //override Methods
        addCustomer():void{}; 
        removeCustomer():void{};

  }

  class Current_Acount extends Account implements IAccount{

    interest_rate:number;
    date_of_opening:Date;
    constructor(_acountNumber,_balance,_date,_rate){
        super(_acountNumber,_balance);
        this.date_of_opening = _date;
        this.interest_rate = _rate;
    }
    addCustomer():void{};
    removeCustomer():void{};

  }