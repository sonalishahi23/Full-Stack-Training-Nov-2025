from report.report_dashboard import ReportDashboard 
from menu.menu_dashboard import MenuDashboard
from order.order_dashboard import OrderDashboard
from staff_management.staff_manage import StaffManagement 
from Booking_Table.table_dashboard import TableDashboard
from billing_payment.generate_bill import BillGenerator
from validation.common_validation import CommonValidation
from Inventory.inventory_dashboard import InventoryDashboard
from datetime import datetime
import os

class Admin_dashboard:

    LOG_FILE = "App/logs/admin_logs.txt"
    
    def __init__(self):
        self.validator = CommonValidation()
        os.makedirs("App/logs", exist_ok=True)

    def write_admin_log(self, action):
        now = datetime.now()
        date_time = now.strftime("%d-%m-%Y %H:%M:%S")

        with open(self.LOG_FILE, "a") as file:
            file.write(f"{date_time} | Action: {action}\n")


    def show_dashboard(self):
        while True:
            print("\n" + "=" * 65)
            print("*******ADMIN DASHBOARD*******".center(65))
            print("=" * 65)
            
            print("1. Manage Menu")
            print("2. Manage Order")
            print("3. Manage Staff")
            print("4. View Reports")
            print("5. Manage Table Booking")
            print("6. Generate Bill")
            print("7. Inventory Management")
            print("8. Logout")
            print("-" * 65)

            

            choice = input("Enter your choice (1-8): ")
            validated_choice = self.validator.validate_choice(choice, 1, 8)

            if validated_choice is None:
                continue

            if validated_choice == 1:
                print("\nOpening Menu Management...\n")
                MenuDashboard().menu_dashboard()
                self.write_admin_log("Menu Management Opened")

            elif validated_choice == 2:
                print("\nOpening Order Management...\n")
                OrderDashboard().menu()
                self.write_admin_log("Order Management Opened")

            elif validated_choice == 3:
                print("\nOpening Staff Management...\n")
                StaffManagement().show_menu()
                self.write_admin_log("Staff Management Opened")

            elif validated_choice == 4:
                print("\nOpening Reports...\n")
                ReportDashboard().show_menu()
                self.write_admin_log("Report Dashboard Opened")

            elif validated_choice == 5:
                print("\nOpening Table Booking System...\n")
                TableDashboard().show_menu()
                self.write_admin_log("Table Booking Management Opened")

            elif validated_choice == 6:
                print("\nGenerating Bill...\n")
                BillGenerator().generate_bill()
                self.write_admin_log("Bill Generator Opened")

            elif validated_choice == 7:   
                print("\nOpening Inventory Management...\n")
                InventoryDashboard().show_menu()
                self.write_admin_log("Inventory Management Opened")

            elif validated_choice == 8:
                print("Logout")
                self.write_admin_log("Admin Logged Out")
                break
            else:
                print("Invalid choice")
            