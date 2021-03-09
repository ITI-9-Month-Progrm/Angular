//parent class
class Account {
    //Constructor
    constructor(_accountNum, _balance) {
        this.acc_Num = _accountNum;
        this.balance = _balance;
    }
    //Methods
    debitAmount() { }
    ;
    creditAmount() { }
    ;
    getBalance() { }
    ;
    //Getter and Setter
    getAccountNumber() { return this.acc_Num; }
    getBalanceValue() { return this.balance; }
    setAccountNumber(_value) { this.acc_Num = _value; }
    setBalance(_value) { this.balance = _value; }
}
//inhertance 
class Saving_Account extends Account {
    //assign values
    constructor(_acc_num, _balance, _min, _date) {
        super(_acc_num, _balance);
        this.min_balance = _min;
        this.date_of_opening = _date;
    }
    //override Methods
    addCustomer() { }
    ;
    removeCustomer() { }
    ;
}
class Current_Acount extends Account {
    constructor(_acountNumber, _balance, _date, _rate) {
        super(_acountNumber, _balance);
        this.date_of_opening = _date;
        this.interest_rate = _rate;
    }
    addCustomer() { }
    ;
    removeCustomer() { }
    ;
}
