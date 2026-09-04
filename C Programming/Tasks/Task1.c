#include<stdio.h>
/*calculate the area of a rectangle*/
int main()
{
    float length,width;
    float side,radius; 
    float pi=3.14;
   printf("**********Perimeter and Area Calculator for Rectangle**********\n");
    printf("\n");
    printf("Enter the length of a rectangle :-");
    scanf("%f",&length);
    printf("Enter the width of a rectangle  :-");
    scanf("%f",&width);
    printf("Perimeter of a rectangle        :- %.2f\n", 2*(length+width));
    printf("Area of a rectangle             :- %.2f\n",length*width);
    

    /*calcualte the area of square*/
    printf("\n");
    printf("**********Perimeter and Area Calculator for Square**********\n");
    printf("\n");
    printf("Enter the side of a square  :-");
    scanf("%f",&side);
    printf("Perimeter of a Square       :- %.2f\n", 4*side);
    printf("Area of a square            :- %.2f\n",side*side);

    /*calculate the area of circle*/
    printf("\n");
    printf("**********Circumference and Area Calculator for Circle**********\n");
    printf("Enter the radius of a circle  :-");
    scanf("%f",&radius);
    printf("Circumference of a Circle     :- %.2f\n", 2*pi*radius);
    printf("Area of a circle              :- %.2f\n",pi*radius*radius);
    
    return 0;
}