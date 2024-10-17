1.Components In Angular --->
    1.Components are most basic UI building blocks of an angular applications.
    2.Components are defined using @Component decorator.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2.In Angular, a component is a fundamental building block that defines a part of the user interface (UI). Each component consists of:

 A Class: This handles the logic and data of the component, defined in TypeScript.

 A Template: Defines the HTML structure of the UI.

 Styles: Define the look and feel of the component using CSS or SCSS.

 Metadata (Decorators): This provides metadata about the component, such as its selector, template URL, and style URLs.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3.Key Parts of an Angular Component

Component Class: The TypeScript class holds the data (properties) and behavior (methods) of the component. It is where business logic resides.

Example:

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title = 'Hello Angular!';

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}


Template: The template defines the HTML layout and is bound to the component's data.

Example (example.component.html):

<h1>{{ title }}</h1>
<button (click)="changeTitle('New Title')">Change Title</button>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Styles: The styles define the appearance of the component. They can be scoped to the component, making them not affect other components.

Example (example.component.css):

h1 {
  color: blue;
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Metadata: This is provided by the @Component decorator, which tells Angular that the class is a component and includes information about its selector, template, and styles.

Example Component
Let’s create a simple component named app-greeting:

greeting.component.ts:

import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  name: string = 'World';

  updateName(newName: string) {
    this.name = newName;
  }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

greeting.component.html:


<p>Hello, {{ name }}!</p>
<input [(ngModel)]="name" placeholder="Enter your name">
greeting.component.css:

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

css
p {
  font-size: 18px;
  color: green;
}


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Key Features in Angular Components

1.Data Binding:

Interpolation: Display data from the component class in the template using {{ expression }}.

Property Binding: Bind DOM element properties to component properties using [property]="expression".

Event Binding: Capture user actions and call component methods using (event)="method()".

Two-Way Binding: Sync data between the component and the view using [(ngModel)].
Component Interaction:

2.Input: Pass data from a parent component to a child component using @Input().

3.Output: Emit events from a child component to the parent using @Output().

Example:
@Input() member: Member;
@Output() memberClicked = new EventEmitter<Member>();

Lifecycle Hooks: Components have lifecycle hooks such as:

ngOnInit(): Called once after the component's inputs are initialized.
ngOnChanges(): Called when any data-bound property changes.
ngOnDestroy(): Cleanup logic when the component is destroyed.

View Encapsulation: Angular components encapsulate their styles by default. This can be controlled via the encapsulation property (e.g., ViewEncapsulation.None for global styles).
Components are the core units in Angular applications, helping to break down the UI into reusable, modular pieces.
                        
