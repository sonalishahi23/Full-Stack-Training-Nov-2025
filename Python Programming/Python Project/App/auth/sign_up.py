import uuid
from validation.auth_validation import Name_validation, EmailValidation, PasswordValidation
from utilities.file_handler import FileHandler
import os
from datetime import datetime


class SignUp:

    LOG_FILE = "App/logs/signup_logs.txt"

    def __init__(self):
        os.makedirs("App/logs", exist_ok=True)

    def register_user(self):

        user_id = str(uuid.uuid4().int)[:6]

        validating_name = Name_validation()
        print("\n" + "=" * 60)
        print("           *****SIGN UP DASHBOARD*****  ")
        print("=" * 60)
        while True:
            name = input("Enter Name: ")
            if  validating_name.validation_name(name):
                break
            else:
                print("Please Enter a Valid Name.")

        email_validator = EmailValidation()

        while True:
            email = input("Enter Email: ")

            if not email_validator.validate_email(email):
                print("Please Enter a Valid E-mail")
                continue

            try:
                data = FileHandler.read_json("App/database/users.json")
            except Exception as e:
                print("Something went wrong!")
                self.write_signup_log(email, "Failed")   

                with open("App/logs/error_logs.txt", "a") as f:
                    f.write(f"{str(e)}\n")

                return

            email_exists = False

            for user in data:
                if user["email"] == email:
                    email_exists = True
                    print("Email already registered. Try another email.")
                    self.write_signup_log(email, "Failed") 
                    break

            if not email_exists:
                break

        password_validator = PasswordValidation()
        while True:
            password = input("Enter Password: ")
            if not password_validator.validate_password(password):
                print("Please Enter A Valid Password")
            else:
                break
        
        while True:
            print("\n" + "-" * 25 + " SELECT ROLE " + "-" * 25)
            print("1. Admin")
            print("2. Staff")
            print("-" * 60)

            choice = input("Choose Role: ")

            if not choice.isdigit():
                print("Enter numbers only")
                continue

            choice = int(choice)

            if choice == 1:
                role = "admin"
                break
            elif choice == 2:
                role = "staff"
                break
            else:
                print("Invalid role selected")
    
        user = {
            "id": user_id,
            "name": name,
            "email": email,
            "password": password,
            "role": role
        }


        data.append(user)

        FileHandler.write_json("App/database/users.json", data)

        print("\n" + "=" * 60)
        print("SIGNUP SUCCESSFUL".center(60))
        print("=" * 60)
        print(f"Name: {name}")
        print(f"User ID: {user_id}")
        print(f"Role: {role.upper()}")
        print("-" * 60)
        self.write_signup_log(email, "Successful") 

    def write_signup_log(self, email, status):
    
        now = datetime.now()
        date_time = now.strftime("%d-%m-%Y %H:%M:%S")

        with open(self.LOG_FILE, "a") as file:
            file.write(f"{date_time} | Email: {email} | Signup {status}\n")