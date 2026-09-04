name=input("Enter any Name: ")
name=name.lower()
count_a=name.count("a")
count_e=name.count("e")
count_i=name.count("i")
count_o=name.count("o")
count_u=name.count("u")
total_vowels= count_a + count_e + count_i + count_o + count_u
if total_vowels>0:
    print(f"This Name Contains {total_vowels} Vowels.")
    print("The Vowels are: ")
    if name.count("a") > 0:
        print("a :", name.count("a"))
    if name.count("e") > 0:
        print("e :", name.count("e"))
    if name.count("i") > 0:
        print("i :", name.count("i"))
    if name.count("o") > 0:
        print("o :", name.count("o"))
    if name.count("u") > 0:
        print("u :", name.count("u"))
else:
    print("This Name does not contain any vowel")

