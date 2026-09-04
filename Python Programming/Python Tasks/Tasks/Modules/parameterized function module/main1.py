import arithmetic
import multiplication
import numbercheck
import compare
import power

def main():
    a = int(input("Enter the value of a: "))
    b = int(input("Enter the value of b: "))

    print("Addition:", arithmetic.add(a, b))
    print("Subtraction:", arithmetic.subtract(a, b))

    print("Multiplication:", multiplication.multiply(a, b))
    print("Division:", multiplication.divide(a, b))

    print("Is Even:", numbercheck.is_even(a))
    print("Is Positive:", numbercheck.is_positive(a))

    print("Maximum:", compare.find_max(a, b))
    print("Minimum:", compare.find_min(a, b))

    print("Square:", power.square(a))
    print("Cube:", power.cube(a))


    
main()