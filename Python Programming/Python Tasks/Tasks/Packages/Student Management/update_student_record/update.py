
from .validation import name_validation, course_validation, email_validation,validate_update_id
from student_registration.registration import read_function, write_function


filename = "students_information.json"
def update_record():
    while True: 
       update_id=input("Enter Student ID to update data: ")

       if validate_update_id(update_id):
            break  
       else:
            print("Please enter a valid 14-digit numeric ID.")

    students_list = read_function()

    if not students_list:
       print("No Record Found")
       return

    found=False
    for student in students_list:
        if student["id"] == update_id:
            print("Student Found")
            print("What do you want to update?")
            print("1. Name")
            print("2. Course")
            print("3. Cancel")

            choice = input("Enter your choice: ")

            if choice == "1":
                student["name"] = name_validation()
                print("Name updated successfully.")

            elif choice == "2":
                student["course"] = course_validation()
                print("Course updated successfully.")

            elif choice == "3":
                print("Update Cancelled.")
                return

            else:
                print("Invalid Choice.")
                return

            found = True
            break

    if found:
        write_function(students_list)
        print("Student Record Updated Successfully")
    else:
        print("Student not found")