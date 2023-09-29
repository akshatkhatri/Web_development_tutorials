/**
 * *author-akshat khatri
 * !date-27-09-2023
 * *testing for anagram
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main()
{
    int arr[26] = {0};
    int arr2[26] = {0};
    char str1[100];
    char str2[100];
    printf("enter the string 1\n");
    fgets(str1, 100, stdin);
    printf("enter the string 2\n");
    fgets(str2, 100, stdin);

    int i = 0;
    while (str1[i] != '\0')
    {
        arr[str1[i] - 97]++;
        // printf("%c", str1[i]);
        i++;
    }
    int j = 0;
    while (str2[j] != '\0')
    {
        arr2[str2[j] - 97]++;
        j++;
    }

    for (int k = 0; k < 26; k++)
    {
        // printf("1");
        if (arr[k] != arr2[k])
        {
            printf("not anagram");
            exit(EXIT_FAILURE);
        }
    }
    printf("yes an anagram");
}