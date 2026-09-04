print("**********Marks**********")
name=input("Enter Your Name:- ")
english_marks=(input("Enter marks in English:- "))
hindi_marks=(input("Enter marks in Hindi:- "))
maths_marks=(input("Enter marks in Maths:- "))
science_marks=(input("Enter marks in Science:- "))
computer_marks=(input("Enter marks in Computer:- "))
total=int(english_marks) + int(hindi_marks) + int(maths_marks) + int(science_marks) + int (computer_marks)
percentage=float(total/500)*100

print("**********Marksheet**********")
print(f"Student name:- {name}")
print(f"Marks in English:- {english_marks}")
print(f"Marks in Hindi:- {hindi_marks}")
print(f"Marks in Maths:- {maths_marks}")
print(f"Marks in Science:- {science_marks}")
print(f"Marks in Computer:- {computer_marks}")
print("Percentage is ", percentage)

