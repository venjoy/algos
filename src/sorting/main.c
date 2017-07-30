//program to perform heapsort algorithm
#include<stdio.h>
#include<stdlib.h>
#include"HeapSort.h"

int main()
{
    //taking input
    int length, i;
    int* arr;
    printf("Enter the length of the array:\t");
    scanf("%d", &length);
    arr = (int*) malloc (sizeof(int) * length);
    printf("Enter the array elements:\n");
    for (i = 0; i < length; i++)
    {
        scanf("%d", (arr + i));
    }

    //sorting
    heapSort(arr, length);

    //printing output
    printf("The sorted array using heapsort is:\t");
    for (i = 0; i < length; i++)
    {
        printf("%d\t", *(arr + i));
    }
}