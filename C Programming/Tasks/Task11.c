#include<stdio.h>

int add(int a, int b)
{
    printf("Enter the value of a:- ");
    scanf("%d", &a);
    printf("Enter the value of b:- ");
    scanf("%d", &b);
    int result=a+b;
    printf("Sum of a and b is :- %d\n", result);
    return 0;
}

int subtract(int a, int b)
{
   printf("Enter the value of a:- ");
    scanf("%d", &a);
    printf("Enter the value of b:- ");
    scanf("%d", &b);
    int result=a-b;
    printf("Subtraction of a and b is :- %d\n", result);
    return 0; 
}

int multiply(int a, int b)
{
    printf("Enter the value of a:- ");
    scanf("%d", &a);
    printf("Enter the value of b:- ");
    scanf("%d", &b);
    int result=a*b;
    printf("Multiplication of a and b is :- %d\n", result);
    return 0;
}

int division(float a, float b)
{
    printf("Enter the value of a:- ");
    scanf("%f", &a);
    printf("Enter the value of b:- ");
    scanf("%f", &b);
    float result=a/b;
    printf("Division of a and b is :- %.2f\n", result);
    return 0;
    
}

int main()
{
    int a,b;
    printf("*********Menu Driven Program*********\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("5. Exit\n");
  do
 {
    int userchoice;
    printf("\n");
    printf("Enter the User Choice:- ");
    scanf("%d", &userchoice);
    if(userchoice==1)
    {
        add(a, b);
    }
    else if(userchoice==2)
    {
       subtract(a,b);
    }
    else if(userchoice==3)
    {
       multiply(a,b);
    }
    else if(userchoice==4)
    {
        division(a,b);
    }
    else if(userchoice==5)
    {
        printf("Program Exited!!\n");
        break;
    }
  }while(1);
  
    return 0;
}
