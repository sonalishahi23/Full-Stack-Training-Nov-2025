#include<stdio.h>
#include<string.h>
long check_account()
{
   
    char user_input[20];
    int length;
    while(1)
    {
    int count = 0;
    printf("\nPlease enter account number: ");
    scanf("%s", &user_input);

    length = strlen(user_input);

    if (length == 9)
    {
        for (int i = 0; i < 9; i++)
        {
            if (user_input[i] >= '0' && user_input[i] <= '9')
            {
                count++;
            }
        }

        if (count == 9)
        {
            printf("Account Number is Valid.");
            break;
        }
        else
        {
            printf("Account number only contains 9 digits.");
        }
    }
    else
    {
        printf("Invaild Account Number.");
    }
}
    return 0;
}  
int main()
{

    check_account();
    return 0;
}