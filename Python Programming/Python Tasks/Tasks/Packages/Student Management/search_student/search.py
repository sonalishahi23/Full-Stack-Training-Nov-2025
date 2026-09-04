
from .validation_search import validate_id
from student_registration.registration import read_function


filename = "students_information.json"
def search_student():
    while True:
       searching_id=input("Enter the ID which you want to search: ")

       if validate_id(searching_id):
            break  
       else:
            print("Please enter a valid 14-digit numeric ID.")


    students_list = read_function() 

    found=False
    for student in students_list:
        if student["id"] == searching_id:
            print("Student Details Are: ")
            print("ID:", student["id"])
            print("Name:", student["name"])
            print("Email:", student["email"])
            print("Course:", student["course"])
            found = True
            break

    if not found:
        print("Student not found")