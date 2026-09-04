#include<stdio.h>
long check_account(long user_input)
{
    long correct_account_number=234567891;
    
   if(user_input >= 100000000 && user_input <= 999999999)

    {
        if(user_input==correct_account_number)
        {
            printf("Account number is Correct.\n");
        }
        else
        {
            printf("Account number is Incorrect.\n");
        }
    }
    else
    {
        printf("Account number should be 9 digits only.\n");
    }
return 0;
}
int main()
{
    
    long correct_account_number=234567891;
    long user_input;
    for(int attempt=1; attempt<=3; attempt++)
    {
    printf("Enter Your account number:- ");
    scanf("%lld", &user_input);
  
    check_account(user_input);
    if(user_input==correct_account_number)
    {
        printf(" you have logined succesfully.\n");
        break;
    }
    else if(attempt==3)
    {
        if(user_input==correct_account_number)
        {
            printf("Thank you!!");
        }
        else
        {
        printf("Try again later. Maximum attempts reached.\n");
        }
    }
    else
    {
    printf("you have %d attempts left.\n", 3-attempt);
    }
}

    return 0;
}