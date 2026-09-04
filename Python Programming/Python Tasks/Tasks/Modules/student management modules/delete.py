import data_module

def delete_student():
    if not data_module.student_data:
        print("No student records available to delete")
        return

    delete_id = input("Enter Student ID to delete: ")

    for student in data_module.student_data:
        if student["id"] == delete_id:
            data_module.student_data.remove(student)
            print("Student Record Deleted Successfully")
            return

    print("Student Record Not Found")