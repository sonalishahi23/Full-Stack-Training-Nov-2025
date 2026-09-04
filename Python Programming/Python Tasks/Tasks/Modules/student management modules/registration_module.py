import data_module
def student_registration():
    if len(data_module.student_data) >= data_module.maximum_student:
        print(" Maximum 3 students allowed")
        return
    information={
        "id":input("Enter Student ID: "),
        "name":input("Enter Student Name: "),
        "address": input("Enter Student Address: ")
        }
    data_module.student_data.append(information)
    print("Student Registered Successfully")