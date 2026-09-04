import json
from validation.auth_validation import EmailValidation, PasswordValidation
from admin_management.admin_dashboard import Admin_dashboard
from staff_management.staff_dashboard import StaffDashboard
from utilities.file_handler import FileHandler
from datetime import datetime
import os


class Login:

    LOG_FILE = "App/logs/login_logs.txt"   

    def __init__(self):
        os.makedirs("App/logs", exist_ok=True)   

    def write_login_log(self, email, role, success=True):
        now = datetime.now()
        date_time = now.strftime("%d-%m-%Y %H:%M:%S")

        status = "Successful" if success else "Failed"

        with open(self.LOG_FILE, "a") as file:   
            file.write(f"{date_time} | Email: {email} | Role: {role} | Login {status}\n")

    def login_user(self):

        email_validator = EmailValidation()
        password_validator = PasswordValidation()

        print("\n" + "=" * 60)
        print("           *****LOGIN DASHBOARD*****  ")
        print("=" * 60)

        while True:
            email = input("Enter Email: ")
            if email_validator.validate_email(email):
                break
            else:
                print("Invalid Email")

        while True:
            password = input("Enter Password: ")
            if password_validator.validate_password(password):
                break
            else:
                print("Invalid Password")

        try:
            data = FileHandler.read_json("App/database/users.json")
        except FileNotFoundError:
            print("No users registered")
            self.write_login_log(email, "Unknown", success=False)
            return

        except Exception as e:
            print("Something went wrong!")
            self.write_login_log(email, "Unknown", success=False)
            print(f"Error: {e}") 
            return
        
        
        for user in data:
            if user["email"] == email and user["password"] == password:

                print("\n" + "-" * 60)
                print(f"Login Successful! Welcome, {user['name']} ")
                print("-" * 60)

                self.write_login_log(email, user["role"], success=True)

                if user["role"] == "admin":
                    print("Redirecting to Admin Dashboard...\n")
                    admin = Admin_dashboard()
                    admin.show_dashboard()

                elif user["role"] == "staff":
                    print("Redirecting to Staff Dashboard...\n")
                    staff = StaffDashboard()
                    staff.show_menu()

                return


        print("Invalid Email or Password")
        self.write_login_log(email, "Unknown", success=False)