Injectable Services:
Injectable services are a type of service in Angular that can be injected into other components or services using the dependency injection mechanism. Injectable services are marked with the @Injectable() decorator, which tells Angular that the service can be injected into other components or services.

When a component or service is injected with an injectable service, Angular creates a single instance of the service and shares it across all components or services that use it. This ensures that the service is always consistent and up-to-date, and helps to reduce code duplication and improve code organization.

To create an injectable service in Angular, you typically start by creating a new class and marking it with the @Injectable() decorator. You can then add properties and methods to the class to define the service's functionality. 
