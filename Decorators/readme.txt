Decorators are special functions that attach metadata to classes, methods, or properties, enhancing them with additional features or behaviors. 
Angular extensively uses decorators to define the structure of components, services, modules, and more. Decorators provide metadata to Angular, 
allowing it to process and create instances of these classes during runtime.

Here are the main types of decorators in Angular:

1. @Component()
The @Component decorator is used to define a component in Angular. It marks a class as an Angular component and provides the metadata about the component, such as its template, style URLs, selector, etc.
Example:

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',  // HTML tag to render this component
  templateUrl: './example.component.html',  // Path to the template file
  styleUrls: ['./example.component.css']    // Path to the styles
})
export class ExampleComponent {
  title = 'My Angular App';
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. @Directive()
The @Directive decorator is used to create custom directives. A directive is a class that adds behavior to elements in the DOM (like structural directives *ngIf and *ngFor).
Example:

typescript
Copy code
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Applied as an attribute on an element
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. @Injectable()
The @Injectable decorator is used to mark a class as a service that can be injected via Angular's dependency injection system. This decorator is applied to service classes and allows Angular to inject dependencies into the class.
Example:

typescript
Copy code
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Makes this service available at the root level
})
export class DataService {
  getData() {
    return ['data1', 'data2', 'data3'];
  }
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4. @NgModule()
The @NgModule decorator is used to define an Angular module. It marks a class as an Angular module and provides metadata about the module like the components, directives, pipes, and services that belong to it, as well as the modules it imports or exports.
Example:

typescript
Copy code
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  // Declares components, directives, and pipes
  imports: [BrowserModule],      // Imports other modules
  bootstrap: [AppComponent]      // The root component to bootstrap
})
export class AppModule {}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5. @Input()
The @Input decorator is used to define an input property in a child component. It allows data to be passed from a parent component to a child component.
Example:

typescript
Copy code
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h2>Hello, {{ name }}!</h2>`
})
export class ChildComponent {
  @Input() name: string;  // Accepts the value from the parent
}
Usage in the parent component:

html
Copy code
<app-child [name]="parentName"></app-child>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6. @Output()
The @Output decorator allows a child component to emit events that the parent component can listen to. This is typically used for event communication between parent and child components.
Example:

typescript
Copy code
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.message.emit('Hello from the Child Component!');
  }
}
Usage in the parent component:

html
Copy code
<app-child (message)="receiveMessage($event)"></app-child>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7. @HostListener()
The @HostListener decorator allows you to listen to DOM events triggered on the host element of a directive or component and respond to those events inside the class.
Example:

typescript
Copy code
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left!');
  }
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

8. @HostBinding()
The @HostBinding decorator is used to bind a property of the host element (such as class or style) to a property in the directive or component class.
Example:

typescript
Copy code
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'lightblue';
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

9. @Pipe()
The @Pipe decorator is used to define a custom pipe that can be used to transform data in templates.
Example:

typescript
Copy code
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
Usage in template:

html
Copy code
{{ 'hello' | reverse }}  <!-- Output: 'olleh' -->

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Summary
Angular decorators provide powerful ways to configure components, directives, services, modules, pipes, and other classes. They allow you to define behavior and communication patterns in a clean and structured way, making Angular's architecture modular and easy to maintain.
