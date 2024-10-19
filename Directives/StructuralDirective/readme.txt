
In Angular, a structural directive is responsible for altering the structure of the DOM by adding or removing elements based on a condition. 
Structural directives use the * prefix to indicate that they dynamically change the view structure. 
These directives affect the host element (the element where the directive is applied) by adding or removing it or modifying its children.

There are three commonly used structural directives in Angular:

*ngIf: Conditionally includes or excludes an element based on a boolean expression.


<div *ngIf="isVisible">Content to display</div>
In this example, the div will only be rendered if isVisible is true.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
*ngFor: Loops through an array or iterable and renders a template for each item.


<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
Here, each item in the items array will result in an li element being created.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

*ngSwitch: A group of directives that work together to display one of many elements based on a switch expression.

*ngSwitch: Defines the condition.
*ngSwitchCase: Matches the value with cases.
*ngSwitchDefault: Provides a default case.

Example:
<div [ngSwitch]="viewMode">
  <div *ngSwitchCase="'map'">Map View</div>
  <div *ngSwitchCase="'list'">List View</div>
  <div *ngSwitchDefault>Default View</div>
</div>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Key Points:
Structural directives start with *, like *ngIf or *ngFor.
They modify the structure of the DOM dynamically.
Use structural directives to add or remove elements based on conditions or iterations.
