import menu_module
import registration_module
import search_module
import view_module
import update
import delete

while True:
    menu_module.show_menu()
    choice = input("Enter your choice: ")

    if choice == "1":
       registration_module.student_registration()
    elif choice == "2":
        search_module.search_student()

    elif choice == "3":
        view_module.view_all_records()

    elif choice == "4":
        update.update_student()

    elif choice == "5":
        delete.delete_student()

    elif choice == "6":
        print(" Program Exit")
        break

    else:
        print(" Invalid choice, try again")