from program_control import menu
from student_registration.registration import student_registration
from search_student.search import search_student
from update_student_record.update import update_record
from Delete_record.delete import delete_record
import view

def program_flow():
    while True:
    
        user_entered_choice=menu.dashboard()
        if user_entered_choice==1:
            student_registration()
        elif user_entered_choice==2:
            search_student()
        elif user_entered_choice==3:
            update_record()
        elif user_entered_choice==4:
            delete_record()
        elif user_entered_choice==5:
            view.view_students_json()
        elif user_entered_choice==6:
            print("Program Is Exited!!")
            break