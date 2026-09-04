def deposite(balance,amount):
    balance+=amount
    print("Amount Deposited:", amount)
    print("Updated Balance:", balance)
    return balance

def withdraw(balance, amount):
    if amount > balance:
        print("Insufficient Balance!")
        return balance
    else:
        balance = balance - amount
        print("Amount Withdrawn:", amount)
        print("Updated Balance:", balance)
    return balance