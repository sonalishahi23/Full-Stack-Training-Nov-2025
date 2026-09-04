#include<stdio.h>
int main()
{
    int english, maths, computer,hindi,science;
    int total_marks;
    float percentage;
    printf("               Marksheet         \n");
    printf("\n");
    printf("Enter marks obtained in English :- ");
    scanf("%d", &english);
    printf("Enter marks obtained in Maths   :- ");
    scanf("%d", &maths);
    printf("Enter marks obtained in Computer:- ");
    scanf("%d", &computer);
    printf("Enter marks obtained in Hindi   :- ");
    scanf("%d", &hindi);
    printf("Enter marks obtained in Science :- ");
    scanf("%d", &science);
    if(english>=0 && english<=100)
    {
        if(maths>=0 && maths<=100)
        {
            if(computer>=0 && computer<=100)
            {
                if(hindi>=0 && hindi<=100)
                {
                    if(science>=0 && science<=100)
                    {
                        total_marks = english + maths + computer+hindi+science;
                        printf("                                 -------\n");
                        printf("                   Total Marks :- %d\n", total_marks);
                        printf("                                 -------");
                        percentage = (total_marks /500.00)*100;
                        printf("\nPercentage Obtained :- %.2f\n", percentage);
                        if(percentage >=60)
                        {
                         printf("Grade Obtained :- First Division\n");
                        }
                        else if(percentage >=45 && percentage <60)
                        {
                         printf("Grade Obtained :- Second Division\n");
                        }
                        else if (percentage>=33 && percentage<45)
                        {
                         printf("Grade Obtained :- Third Divison\n");
                        }
                        else if (percentage<33)
                        {
                         printf("Grade Obtained :- Fail\n");
                        }
                    }
                }
            }
        }
    }
else 
{
    if(english<0 || english>100) 
    {
        printf("Invalid marks for English. Please Enter marks between 0 and 100.\n");
    }
     if (maths<0 || maths>100) 
    {
        printf("Invalid marks for Maths. Please Enter marks between 0 and 100.\n");
    }
     if(computer<0 || computer>100) 
    {
        printf("Invalid marks for Computer. Please Enter marks between 0 and 100.\n");
    }
     if (hindi<0 || hindi>100) 
    {
        printf("Invalid marks for Hindi. Please Enter marks between 0 and 100.\n");
    }
     if(science<0 || science>100) 
    {
        printf("Invalid marks for Science. Please Enter marks between 0 and 100.\n");
    }
    if(english<0 || english>100 || maths<0 || maths>100 || computer<0 || computer>100 || hindi<0 || hindi>100 || science<0 || science>100)
    {
        printf("Cannot calculate total marks and percentage due to invalid input.\n");
    }
}
return 0;
}
