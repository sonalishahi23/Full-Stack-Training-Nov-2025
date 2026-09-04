from auth.sign_up import SignUp
from auth.login import Login
from validation.common_validation import CommonValidation
import os
from datetime import datetime

class Authentication:

    LOG_FILE = "App/logs/auth_logs.txt"

    def __init__(self):
        self.validator = CommonValidation()
        os.makedirs("App/logs", exist_ok=True)

    def write_auth_log(self, action):
        now = datetime.now()
        date_time = now.strftime("%d-%m-%Y %H:%M:%S")

        with open(self.LOG_FILE, "a") as file:
            file.write(f"{date_time} | Action: {action}\n")

    def menu(self):

        while True:
            print("\n" + "=" * 60)
            print("           *****ROYAL RESTAURANT*****  ")
            print("=" * 60)

            print("\n" + "-" * 25 + " WELCOME " + "-" * 25)
            print("\n1. Sign Up")
            print("2. Login")
            print("3. Exit")
            print("-" * 60)

            choice = input("Enter choice: ")
            choice = self.validator.validate_choice(choice, 1, 3)

            if choice is None:
               continue

            if choice == 1:
                print("\nRedirecting to Sign Up...\n")
                SignUp().register_user()
                self.write_auth_log("SignUp Selected")

            elif choice == 2:
                print("\nRedirecting to Login...\n")
                Login().login_user()
                self.write_auth_log("Login Selected")


            elif choice == 3:
                print("\nThank you for visiting")
                self.write_auth_log("Exit Application")
                break
                

            