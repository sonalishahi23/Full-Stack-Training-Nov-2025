student=[
    {
        "details" : "*****Student 1 Details*****",
        "id" : int(input("Enter Student ID : ")),
        "name" : input("Enter Student Name : "),
        "qualification" : {
            "degree" : input("Enter Your Qualification Degree:- "),
            "Year"   : input("Enter Your Passing Year: ")
        },
        "email" :input("Enter Your Email:- ")
    },
    {
        "details" : "*****Student 2 Details*****",
        "id" : int(input("Enter Student ID : ")),
        "name" : input("Enter Student Name : "),
        "qualification" : {
            "degree" : input("Enter Your Qualification Degree:- "),
            "Year"   : input("Enter Your Passing Year: ")
        },
        "email" :input("Enter Your Email:- ")
    },
    {
        "details" : "*****Student 3 Details*****",
        "id" : int(input("Enter Student ID : ")),
        "name" : input("Enter Student Name : "),
        "qualification" : {
            "degree" : input("Enter Your Qualification Degree:- "),
            "Year"   : input("Enter Your Passing Year: ")
        },
        "email" :input("Enter Your Email:- ")
    }
]

search_id = int(input("Enter Student ID to search: "))

if student[0]["id"] == search_id:
    s = student[0]
else:
    if student[1]["id"] == search_id:
        s = student[1]
    else:
        if student[2]["id"] == search_id:
            s = student[2]
        else:
            s = None
if s != None:
    print(s["details"])
    print("Student ID:", s["id"])
    print("Student Name:", s["name"])
    print("Student Qualification Degree:", s["qualification"]["degree"])
    print("Student Passing Year:", s["qualification"]["Year"])
    print("Student Email:", s["email"])
else:
    print("Student ID not found ")