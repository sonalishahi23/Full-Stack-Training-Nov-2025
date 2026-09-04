#include<stdio.h>
int main()
{
    int marks[3][4];
    for(int student=0; student<3; student++)
    {
        printf("Enter the marks of Student %d: \n", student+1);
        for(int subject=0; subject<4; subject++)
        {
            printf("Subject %d: ", subject+1);
            scanf("%d", &marks[student][subject]);
        }
    }
    printf("\nMarks of Students\n");
    for(int student=0; student<3; student++)
    {
        printf("\nStudent %d: \n", student+1);
        for(int subject=0; subject<4; subject++)
        {
            printf("%d\n", marks[student][subject]);
        }
    }

    return 0;
}