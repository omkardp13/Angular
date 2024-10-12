Generate a pipe using Angular CLI:

ng generate pipe search

-----------------------------------------------------------------------------------------------------------------------------------------------

The transform method takes three parameters:

1.value: The array you want to filter.
2.searchTerm: The string the user inputs to search.
3.key: The key in the object where the search should apply (e.g., name, title, etc.).

It returns a filtered array where the key contains the searchTerm.

-----------------------------------------------------------------------------------------------------------------------------------------------
2. Declare the Pipe in a Module
Once you create a custom pipe, you need to declare it in the declarations array of the appropriate Angular module (usually app.module.ts).

Here’s how to configure it in the module:

In app.module.ts:

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe // Declare the pipe here
  ],

-----------------------------------------------------------------------------------------------------------------------------------------------

3.For custom pipes, you must declare them in the module where they will be used.
   You can then use pipes directly in templates by applying the | pipe symbol.
