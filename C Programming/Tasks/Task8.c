#include<stdio.h>
int main()
{
    int userchoice;
    printf("Enter the number of Student you want to register :- ");
    scanf("%d", &userchoice);
    char name[userchoice][50];
    char id[userchoice][20];
    char email[userchoice][50];
    if(userchoice<5 && userchoice>0)
    {
    for(int i=0; i<userchoice; i++)
    {
        printf("Student %d: \n", i+1);
     printf("Enter Student ID: ");
     scanf(" %[^\n]",id[i]);
     printf("Enter Name: ");
     scanf(" %[^\n]",name[i]);   
     printf("Enter Email: ");
     scanf(" %[^\n]",email[i]);
    }
    printf("Student Details\n");
    for(int i=0; i<userchoice; i++)
    {
        printf("Student %d:\n", i+1);
        printf("Student ID: %s\n", id[i]);
        printf("Name of the Student: %s\n", name[i]);
        printf("Email of the Student: %s\n", email[i]);
    }
}
else
{
    printf("You can Only register 1 to 5 students");
}
    return 0;
}