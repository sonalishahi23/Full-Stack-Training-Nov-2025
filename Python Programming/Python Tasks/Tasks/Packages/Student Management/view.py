import json

from student_registration.registration import read_function

filename="students_information.json"

def view_students_json():
    students_list = read_function()

    with open(filename, "r") as file:
        students_list = json.load(file)

    if not students_list:
        print("No students registered yet.")
        return

    print("All Stored Student Details are ")
    print(json.dumps(students_list, indent=4))
