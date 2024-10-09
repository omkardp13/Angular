1. Template-Driven Forms:

Description: 
1.Template-driven forms rely on Angular's directives within the HTML template to create and manage forms. 
2.This method is simpler and more declarative, as much of the form logic (like validations and bindings) is handled directly in the template.
3.Two-Way data binding is used with the [(ngModel)] syntax.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Key Features:
1.Less code in the component.
2.Suitable for simpler forms.
3.Uses Angular directives like ngModel for two-way data binding.
4.Validation is applied using attributes like required, minlength, etc.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example:
<form #myForm="ngForm">
  <input type="text" name="username" ngModel required>
  <input type="password" name="password" ngModel required>
  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
