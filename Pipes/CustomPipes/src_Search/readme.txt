Generate a pipe using Angular CLI:

ng generate pipe search

-------------------------------------------------------------------------------------------------------------------------------------------------

The transform method takes three parameters:

1.value: The array you want to filter.
2.searchTerm: The string the user inputs to search.
3.key: The key in the object where the search should apply (e.g., name, title, etc.).

It returns a filtered array where the key contains the searchTerm.
