import json
student_data=[]
while True:
    print("Student Menu")
    print("1. Student Registration")
    print("2. Search Student Data")
    print("3. Display Student Data")
    print("4. Exit")
    choice=int(input("Choose Any Option: "))
    
    if choice==1:
        student={
            "id":int(input("Enter Student ID: ")),
            "name": input("Enter Your Name: "),
            "course": input("Enter Your Course Name: ")
            }
        qualification_list=[]
        while True:
           qualification={}
           qualification["qualification_name"]=input("Enter Your Qualifcation Name: ")
           qualification["Passing year"]=input("Enter Your Passing year")
           qualification_list.append(qualification)

           more = input("Do you want to add more qualification (yes/no): ").lower()
           if more != "yes":
                break
        student["qualification"] = qualification_list
        student_data.append(student)
        print("Student Registered Successfully")
    elif choice==2:
        search_id = int(input("Enter Student ID to Search: "))
        found=False
        for i in student_data:
            if i["id"] == search_id:
                print(" Record Found")
                print("ID:", i["id"])
                print("Name:", i["name"])
                print("Course:", i["course"])
                for q in i["qualification"]:
                    print(" - Qualification Name:", q["qualification_name"])
                    print("   Passing Year:", q["Passing year"])
                found = True
                break
        if not found:
            print("Record does not exists.") 
    elif choice==3:
        print(json.dumps(student_data,indent=4))
    elif choice == 4:
        print(" Exiting Program. Thank You!")
        break
    else:
        print(" Invalid Choice, Try Again")  