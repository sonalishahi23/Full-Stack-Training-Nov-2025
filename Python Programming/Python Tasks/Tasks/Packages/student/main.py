from student import details
from student import marks
from student import result

def main():
    name = input("Enter student name: ")
    roll = input("Enter roll number: ")

    m1 = int(input("Enter marks of subject 1: "))
    m2 = int(input("Enter marks of subject 2: "))
    m3 = int(input("Enter marks of subject 3: "))

    print("\n--- Student Details ---")
    details.display_details(name, roll)

    total = marks.total_marks(m1, m2, m3)
    avg = marks.average_marks(m1, m2, m3)

    print("Total Marks:", total)
    print("Average Marks:", avg)

    print("Result:", "Pass" if result.is_pass(avg) else "Fail")
    print("Grade:", result.calculate_grade(avg))

main()
