
def dashboard():
        print("Student Management System")
        print("1. Student Registration")
        print("2. Search Student")
        print("3. Update Student Record")
        print("4. Delete Student")
        print("5. View Student Record")
        print("6. Exit")
        choice=input("Enter Your Choice: ")
        if choice.isdigit():
            choice = int(choice)
            if 1 <= choice <= 6:
                return choice
            else:
                print("Choice out of range! Please select between 1 and 6.")
        else:
            print("Invalid input! Please enter a number between 1 and 6.")



    

