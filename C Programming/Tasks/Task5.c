#include<stdio.h>
int main()
{
   int numbers[10];
   int postive=0, negative=0;
   printf("Enter the Value of 1st element:- ");
   scanf("%d", &numbers[0]);
    printf("Enter the Value of 2nd element:- ");
   scanf("%d", &numbers[1]);
    printf("Enter the Value of 3rd element:- ");
   scanf("%d", &numbers[2]);
    printf("Enter the Value of 4th element:- ");
   scanf("%d", &numbers[3]);
    printf("Enter the Value of 5th element:- ");
   scanf("%d", &numbers[4]);
    printf("Enter the Value of 6th element:- ");
   scanf("%d", &numbers[5]);
    printf("Enter the Value of 7th element:- ");
   scanf("%d", &numbers[6]);
    printf("Enter the Value of 8th element:- ");
   scanf("%d", &numbers[7]);
    printf("Enter the Value of 9th element:- ");
   scanf("%d", &numbers[8]);
    printf("Enter the Value of 10th element:- ");
   scanf("%d", &numbers[9]);
   printf("10 elements of the array are as follows:- \n");
   for(int i=0; i<10; i++)
   {
    printf("value of %d element is = %d\n", i+1, numbers[i]);
    if(numbers[i]>0)
    postive++;
    else if(numbers[i]<0)
    negative++;
   }
    printf("total Postive Numbers are = %d\n", postive);
    printf("total Negative Numbers are = %d\n", negative);
   
   

    return 0;
}