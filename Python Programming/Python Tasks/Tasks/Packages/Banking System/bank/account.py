import random
def create_account(name,dob,adhar_number):
    print("Account is Created!!")
    acc_number=random.randint(10000000, 99999999)
    print("Name: ",name)
    print("DOB:", dob)
    print("Aadhaar Number:", adhar_number)
    print("Your Account Number is ",acc_number )
    return acc_number
    
def display_account(name, dob, adhar_number, acc_number):
    print("\n---- Account Details ----")
    print("Name:", name)
    print("DOB:", dob)
    print("Aadhaar:", adhar_number)
    print("Allotted Account Number:", acc_number)
 