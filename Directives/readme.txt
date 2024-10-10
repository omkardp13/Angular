
Directives : Directives are classes that can add aditional behaviour to element in your angular application.

1. Component Directives : Components are a special type of directive with a template. 
                          They are the most commonly used directives in Angular, and every component in Angular is essentially a directive.
                          They are used to define and control a specific part of the UI.

Example:

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, {{name}}!</h1>`
})
export class HelloComponent {
  name: string = 'Angular';
}
In this case, <app-hello> is a directive that displays the content of the component.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. Structural Directives : These directives modify the structure of the DOM by adding or removing elements. They are prefixed with *. Common structural directives include *ngIf, *ngFor, and *ngSwitch.

Examples:

1. *ngIf: Displays elements based on a condition.

<p *ngIf="isVisible">This text is visible if isVisible is true.</p>

----------------------------------------------------------------------------------------
2.*ngFor: Iterates over an array to render a list of items.


<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
----------------------------------------------------------------------------------------
3.*ngSwitch: Conditionally display elements based on a match.


<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red color selected</p>
  <p *ngSwitchCase="'blue'">Blue color selected</p>
  <p *ngSwitchDefault>Other color selected</p>
</div>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Attribute Directives
These directives are used to change the appearance or behavior of an existing DOM element without modifying its structure. Unlike structural directives, they don't add or remove elements.

Examples:

1.ngClass: Adds or removes classes dynamically.

<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
  This div can be active or disabled based on conditions.
</div>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2.ngStyle: Applies inline styles dynamically.


<p [ngStyle]="{'font-size': fontSize, 'color': textColor}">
  This text has dynamic font size and color.
</p>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Custom Attribute Directive: You can create your own attribute directive to add custom behavior to elements.


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}

<p appHighlight>Highlighted text</p>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Key Points:
1.Structural directives modify the layout by adding/removing DOM elements.
2.Attribute directives change the appearance or behavior of existing DOM elements.
3.Component directives are the building blocks of Angular applications and contain both logic and UI.
