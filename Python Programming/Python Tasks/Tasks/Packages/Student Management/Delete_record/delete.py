
from .validation import id_validation
from student_registration.registration import read_function, write_function

filename="students_information.json"
def delete_record():
    delete_student_id = id_validation()
    students_list = read_function()

    if not students_list:
        print("No records found.")
        return


    new_list=[]

    found=False
    for student in students_list:
        if student["id"] == delete_student_id:
            found = True
        else:
            new_list.append(student)

    if found:
        write_function(new_list)
        print("Student Deleted Successfully")
    else:
        print("Student not found")
