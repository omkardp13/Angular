DOM : 
1. A DOM (Document Object Model) element represents a single node in the HTML document structure and refers to any element in an HTML document, 
such as <div>, <button>, or <input>.

2.It is the building block of the webpage and can be manipulated using JavaScript or Angular to change the appearance, behavior, or content of the webpage.


3.Accessing DOM Elements:

In Angular (or any JavaScript framework), you can access DOM elements to modify them dynamically.
ElementRef and Renderer2 in Angular allow safe access to DOM elements to modify styles, content, or attributes without directly interacting with the DOM, which can be risky from a security standpoint (like Cross-Site Scripting, XSS).
Manipulating DOM Elements:

Styles: You can change the styles (like background color, font size) of a DOM element.
Attributes: You can modify attributes such as class, id, or src (for an image).
Content: You can change the text or HTML content of an element.
