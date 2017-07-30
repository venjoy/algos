//heapsort algorithm... useful for kth smallest or largest element
#include<stdio.h>
#include<stdlib.h>

void heapSort(int*, int);
void buildHeap(int*, int);
void heapify(int*, int, int);
void swap(int*, int, int);

void heapSort(int* arr, int length)
{
    int i;
    buildHeap(arr, length);

    //place the max element at last and heapify
    for(i = length - 1; i >= 0; i--)
    {
        swap(arr, i, 0);
        heapify(arr, i, 0);
    }
}

void buildHeap(int* arr, int length)
{
    int i;
    for (i = (length / 2) - 1; i >= 0; i--)
    {
        heapify(arr, length, i);
    }
}

void heapify(int* arr, int length, int index)
{
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    if (left < length && arr[left] > arr[largest])
    {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest])
    {
        largest = right;
    }
    if (largest != index)
    {
        swap(arr, index, largest);
        heapify(arr, length, largest);
    }
}

void swap(int* arr, int pos1, int pos2)
{
    int temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}