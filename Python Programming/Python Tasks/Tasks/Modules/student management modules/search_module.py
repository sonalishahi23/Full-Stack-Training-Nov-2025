import data_module

def search_student():
    if not data_module.student_data:
        print("No student records found")
        return

    search_id = input("Enter Student ID to search: ")

    for student in data_module.student_data:
        if student["id"] == search_id:
            print("Student Found")
            print("ID:", student["id"])
            print("Name:", student["name"])
            print("Address:", student["address"])
            return

    print("Student Record Not Found")