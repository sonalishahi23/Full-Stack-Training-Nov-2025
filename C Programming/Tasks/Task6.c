#include<stdio.h>
int main()
{
    int user_input[10];
    for(int i = 0; i < 10; i++)
    {
        printf("Enter the value of %d number :- ", i+1);
        scanf("%d", &user_input[i]);
    }
    int max = user_input[0];
    int min = user_input[0];
    for(int i=1; i<10; i++)
    {
        if(user_input[i] > max)
        {
           max=user_input[i];
        }
        else if(user_input[i]<min)
        {
            min=user_input[i];
        }
    }
    printf("The Maximum value is %d\n", max);
    printf("The Minimum value is %d\n", min);
    return 0;
}