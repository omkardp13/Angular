Angular provides several built-in pipes to transform data directly in your templates. 
Here are a few commonly used built-in pipes with examples:

1. DatePipe : Transforms a date value into a specified format.

<!-- Formats the current date -->
<p>{{ today | date }}</p> <!-- Oct 12, 2024 -->

<!-- Custom format -->
<p>{{ today | date: 'dd/MM/yyyy' }}</p> <!-- 12/10/2024 -->
------------------------------------------------------------------------------------------------------------------------------------------------
2. UpperCasePipe : Transforms text to uppercase.

<p>{{ 'hello world' | uppercase }}</p> <!-- HELLO WORLD -->
------------------------------------------------------------------------------------------------------------------------------------------------
3. LowerCasePipe : Transforms text to lowercase.

<p>{{ 'HELLO WORLD' | lowercase }}</p> <!-- hello world -->
------------------------------------------------------------------------------------------------------------------------------------------------
4. CurrencyPipe
Formats a number as a currency string.

<p>{{ 2500 | currency }}</p> <!-- $2,500.00 -->

<!-- Custom currency code -->
<p>{{ 2500 | currency: 'EUR' }}</p> <!-- €2,500.00 -->
------------------------------------------------------------------------------------------------------------------------------------------------
5. PercentPipe
Transforms a number into a percentage string.

<p>{{ 0.85 | percent }}</p> <!-- 85% -->
<p>{{ 0.75 | percent: '1.1-2' }}</p> <!-- 75.00% (custom format) -->
------------------------------------------------------------------------------------------------------------------------------------------------
6. DecimalPipe
Formats a number according to a specified format.

<p>{{ 12345.6789 | number }}</p> <!-- 12,345.679 -->

<!-- Custom decimal format: minimum 1 digit before decimal, minimum 2 and maximum 4 digits after decimal -->
<p>{{ 12345.6789 | number: '1.2-4' }}</p> <!-- 12,345.68 -->
------------------------------------------------------------------------------------------------------------------------------------------------
7. JsonPipe
Converts an object into a JSON string.

<p>{{ user | json }}</p>
<!-- {"name":"John","age":30,"email":"john@example.com"} -->
------------------------------------------------------------------------------------------------------------------------------------------------
8. SlicePipe
Extracts a section of a string or array and returns it as a new string or array.

<!-- For strings -->
<p>{{ 'Angular Pipes' | slice:0:7 }}</p> <!-- Angular -->

<!-- For arrays -->
<ul>
  <li *ngFor="let item of [1, 2, 3, 4, 5] | slice:1:4">{{ item }}</li>
</ul>
<!-- Output: 2, 3, 4 -->
------------------------------------------------------------------------------------------------------------------------------------------------
9. TitleCasePipe
Converts the first letter of each word to uppercase.

<p>{{ 'angular pipes' | titlecase }}</p> <!-- Angular Pipes -->
------------------------------------------------------------------------------------------------------------------------------------------------
10. KeyValuePipe
Converts an object or a map into an array of key-value pairs.


<p *ngFor="let item of {name: 'John', age: 30} | keyvalue">
  {{item.key}}: {{item.value}}
</p>
<!-- Output:
  name: John
  age: 30
-->
------------------------------------------------------------------------------------------------------------------------------------------------
11. AsyncPipe
Unwraps a Promise or an Observable directly in the template and returns the latest value.

<!-- For Observable -->
<p>{{ asyncData$ | async }}</p>

<!-- For Promise -->
<p>{{ asyncPromise | async }}</p>
------------------------------------------------------------------------------------------------------------------------------------------------
12. I18nPluralPipe
Displays different strings depending on a numeric value.

<p>{{ messageCount | i18nPlural: messageMapping }}</p>
typescript
Copy code
messageCount = 1;
messageMapping = {
  '=0': 'No messages',
  '=1': 'One message',
  'other': '# messages'
};


These built-in pipes are powerful and easy to use directly within Angular templates to handle common data transformations.

Using Built-in Pipes
For built-in pipes like DatePipe, UpperCasePipe, etc., you don't need to configure anything manually. Angular provides these out of the box, and you can directly use them in your templates.

