#include<stdio.h>
int main()
{
    float maggie_price;
    float bread_price;
    float milk_price;
    float chana_price;
    float besan_price;
    float noodles_price;
    float total_price;
    float gst;
    printf("\n");
    printf("~~~~~~~~~~~~~Everyday Essential Store~~~~~~~~~~~~~\n\n");
    printf("Enter the Price of Maggie  :- ");
    scanf("%f", &maggie_price);
    printf("Enter the Price of Bread   :- ");
    scanf("%f", &bread_price);
    printf("Enter the Price of Milk    :- ");
    scanf("%f", &milk_price);
    printf("Enter the Price of Channa  :- ");
    scanf("%f", &chana_price);
    printf("Enter the Price of Besan   :- ");
    scanf("%f", &besan_price);
    printf("Enter the Price of Noodles :- ");
    scanf("%f", &noodles_price);
    total_price= maggie_price + bread_price + milk_price + chana_price + besan_price + noodles_price;
     printf("                          ---------------\n");
    printf ("Total Price of All Items  :-  %.2f\n",total_price); 
     printf("                          ---------------\n");
     printf("\n");
    printf (" After Adding GST of 18%%\n\n");
      gst = (total_price * 18)/100;
    printf("\n");
    printf("GST Amount on Total Price  :- %.2f\n", gst);
    printf("\n");
     printf("                          ---------------\n");
    printf("Final Price Of All Items   :-  %.2f\n", total_price + gst);
     printf("                          ---------------\n");
    return 0;

}