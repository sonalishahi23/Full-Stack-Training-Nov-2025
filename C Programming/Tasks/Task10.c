#include <stdio.h>
int main()
{
    char name[5][50];
    long phone[5][20];
    char email[5][50];
    char address[5][100];
    char qualification[5][50];
    for(int i = 0; i < 5; i++)
    {
     printf("Student %d:\n", i + 1);
     printf("Enter Name: ");
     scanf(" %[^\n]",name[i]);   
     printf("Enter Phone Number: ");
     scanf("%lld",phone[i]);
     printf("Enter Email: ");
     scanf(" %[^\n]",email[i]);
     printf("Enter Address: ");
     scanf(" %[^\n]",address[i]);
     printf("Enter Latest Qualification: ");
     scanf(" %[^\n]",qualification[i]);
 }
    printf("\n Student Details \n\n");
    for(int i = 0; i < 5; i++)
    {
     printf("Student %d:\n", i + 1);
     printf("Name: %s\n", name[i]);
     printf("Phone: %s\n", phone[i]);
     printf("Email: %s\n", email[i]);
     printf("Address: %s\n", address[i]);
     printf("Qualification: %s\n", qualification[i]);
    }

    return 0;
}
