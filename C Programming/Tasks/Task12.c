#include<stdio.h>

long check_account(char user_input[20])
{
    char correct_account_number[9]={'2','3','4','5','6','7','8','9','1'};
    for(int attempt=1; attempt<=3; attempt++)
{
    int count=0;
    printf("Enter Your Account Number: ");
    scanf("%s", user_input);
    
    for(int i=0; user_input[i]!='\0'; i++)
    {
    if(user_input[i]>='A' && user_input[i]<='Z' || user_input[i]>='a' && user_input[i]<='z')
    {
        printf("Account Number should not contain alphabets.\n");
        printf("You have %d attempts left.\n", 3 - attempt);
        break;
    }
    count++;
    }


     if (count != 9)
        {
            printf("Account Number should be 9 digits only.\n");
            printf("You have %d attempts left.\n", 3 - attempt);
            continue;
        }


    for (int i = 0; i < 9; i++)
        {
            if(user_input[i]==correct_account_number[i])
            {
                printf("You are logged in successfully.\n");
                break;
            }
            else{
                printf("Account Number is Incorrect.\n");
                printf("You have %d attempts left.\n", 3 - attempt);

            }
        }
   

}
    return 0;
}

int main()
{
    char user_input[20];
    check_account(user_input);
    return 0;
}