class Bank:
    def __init__(self,balance=5000):
        self.__balance=balance

    def deposite(self,amount):
        self.__balance+=amount
        print("Amount Deposited:  ",amount)

    def withdraw(self,amount):
        if amount<=self.__balance:
            self.__balance-=amount
            print("Amount Withdrawn: ",amount)
        else:
            print("low balance")

    def check_balance(self):
        print("Current Balance is: ",self.__balance)
    
account=Bank()
account.balance=12000
while True:
    print(" Bank Menu ")
    print("1. Add Amount")
    print("2. withdrawn Amount")
    print("3. Check Balance")
    print("4. Exit")
    choice=int(input("Enter your Choice: "))
    if choice==1:
        amount=int(input("Enter amount you want to deposite: "))
        account.deposite(amount)
    elif choice==2:
       amount=int(input("Enter amount you want to withdraw: "))
       account.withdraw(amount)
    elif choice==3:
       account.check_balance()
    elif choice==4:
       print("Program is exited")
       break
    else:
        print("Invalid Choice")

