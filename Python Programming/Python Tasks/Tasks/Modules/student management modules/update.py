import data_module

def update_student():
    if not data_module.student_data:
        print(" No student records available to update")
        return

    update_id = input("Enter Student ID to update: ")

    for student in data_module.student_data:
        if student["id"] == update_id:
            print("Student Found")

            new_name = input("Enter New Name: ")
            new_address = input("Enter New Address: ")

            student["name"] = new_name
            student["address"] = new_address

            print(" Student Record Updated Successfully")
            return

    print(" Student Record Not Found")