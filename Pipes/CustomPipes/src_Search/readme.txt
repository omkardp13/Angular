Generate a pipe using Angular CLI:

bash
Copy code
ng generate pipe search


The transform method takes three parameters:
value: The array you want to filter.
searchTerm: The string the user inputs to search.
key: The key in the object where the search should apply (e.g., name, title, etc.).
It returns a filtered array where the key contains the searchTerm.
