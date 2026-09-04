import json
student_data=[]

def display():
   while True:
      choice=menu()
      if choice==1:
         student_registration()
      elif choice==2:
         view_data()
      elif choice==3:
         search_record()
      elif choice==4:
         print("Exiting the program.")
         break
      else:
          print("You Entered a Invalid choice.")

        

def menu():
   print("Student Menu")
   print("1. Student Registration")
   print("2. View Student Data")
   print("3. Search Student Record")
   print("4. Exit")
   choice=int(input("Enter Your Choice from Menu:- "))
   return choice

def student_registration():
   student={
      "id"  : int(input("Enter Student ID: ")),
      "name":input("Enter Student Name: "),
      "email": input("Enter Your Email: "),
      "qualification" : {
         "qualification name": input("Enter your Qualification: "),
         "passing year" : input("Enter Passing Year:")
      }
   }
   student_data.append(student)
   print("Student Registered Successfully")

def view_data():
    print(json.dumps(student_data,indent=4))

def search_record():
   search_id = int(input("Enter Student ID to Search: "))
   found=False
   for i in student_data:
            if i["id"] == search_id:
                print(" Record Found")
                print("ID:", i["id"])
                print("Name:", i["name"])
                print("Email:", i["email"])
                print("Qualification Name:", i["qualification"]["qualification name"])
                print(" Passing Year:",i["qualification"] ["passing year"])
                found = True
                break
   if not found:
      print("Record does not exists.") 


display()
