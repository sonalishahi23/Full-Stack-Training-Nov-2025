from bank import account
from bank import customer
from bank import transaction
from bank import loan

def View_menu():
    balance = 0

    while True:
        print("******BANK MENU*****")
        print("1. Add Customer")
        print("2. Create Account")
        print("3. Deposit Money")
        print("4. Withdraw Money")
        print("5. Calculate Loan")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter your Name: ")
            phone = input("Enter your Phone Number: ")
            customer.add_customer(name, phone)

        elif choice == "2":
            name = input("Enter your Name: ")
            dob = input("Enter your DOB: ")
            adhar_number = input("Enter your Aadhaar Number: ")
            acc_number = account.create_account(name, dob, adhar_number)
            account.display_account(name, dob, adhar_number, acc_number)

        elif choice == "3":
            deposit_amount = float(input("Enter amount to deposit: "))
            balance = transaction.deposite(balance, deposit_amount)

        elif choice == "4":
            withdraw_amount = float(input("Enter amount to withdraw: "))
            balance = transaction.withdraw(balance, withdraw_amount)

        elif choice == "5":
            principal = float(input("Enter loan amount: "))
            rate = float(input("Enter interest rate: "))
            time = float(input("Enter time (years): "))
            interest = loan.calculate_interest(principal, rate, time)
            total = loan.calculate_total_amount(principal, interest)

        elif choice == "6":
            print("Thank you for using Banking System")
            break

        else:
            print("Invalid choice! Please try again.")
