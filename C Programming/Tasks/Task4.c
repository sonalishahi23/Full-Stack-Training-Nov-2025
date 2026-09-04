#include<stdio.h>
int main()
{
    int userchoice,a,b,result1, result2, result3, result4;
    printf("Menu Driven Program\n");
    printf("1. Addition");
    printf("\n2. Subtraction");
    printf("\n3.Multiplication");
    printf("\n4. Division");
    printf("\n5. Exit\n");
    
    do
    {
    printf("Please Enter Your Choice:- ");
    scanf("%d", &userchoice);
    
    if(userchoice>=1 && userchoice<=4)
    {
    printf("Enter the value of A:- ");
    scanf("%d", &a);
    printf("Enter the value of B:- ");
    scanf("%d", &b);
    }
    result1=a+b;
    result2=a-b;
    result3=a*b;
    result4=a/b;
    if(userchoice==1)
    {
     printf("The Addition of Two Numbers is %d\n", result1);
    }
    else if(userchoice==2)
    {
        printf("The subtraction of two number is %d\n", result2);
    }
    else if(userchoice==3)
    {
        printf("The Multiplication of two number is %d\n", result3);
    }
    else if(userchoice==4)
    {
        printf("The divison of two number is %d\n", result4);
    }
    else if(userchoice==5)
    {
        break;
    }
    }while(1);


return 0;
}