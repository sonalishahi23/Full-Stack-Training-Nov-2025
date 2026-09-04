import json
import os
from datetime import datetime
from student_registration import validation_name
from student_registration import validation_email
from student_registration import validation_course

filename = "students_information.json"
def read_function():
    if not os.path.exists(filename):
        with open(filename, "w") as file:
           json.dump([], file)
    with open (filename,"r") as file:
        return json.load(file)

def write_function(students_list):
    with open(filename,"w") as file:
        json.dump(students_list,file,indent=4)

def student_registration():
    students_list = read_function()
    student = {}
    student["name"] = validation_name.name_validation()
    student["email"] = validation_email.email_validation()
    student["course"] = validation_course.course_validation()

    student["id"]=datetime.now().strftime("%Y%m%d%H%M%S")
    students_list.append(student)

    write_function(students_list)

    print("Registration is Done.")
    print("Your Student ID is ",student["id"])