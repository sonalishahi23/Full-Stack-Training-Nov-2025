#include<stdio.h>
int main()
{
    char name[] = {"sonsolsonp"};
    for(int i=0; i<10;i++)
    {
        for(int j=0; j<10;j++)
        {
            if(name[i]==name[j])
            {
                printf(" %c", name[i]);
               
            }
        }
    }

    return 0;
}