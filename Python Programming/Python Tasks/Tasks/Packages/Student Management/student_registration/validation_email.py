def email_validation():
    while True:
        email = input("Enter Email: ")
        if email.endswith("@gmail.com"):
            return email
        else:
            print("Invalid Email. Only gmail.com allowed.")