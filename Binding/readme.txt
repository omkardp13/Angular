Data binding is the way of communicate your typescript code of your component and your html view.

1.String Interpolation :It is One -Way data binding technique that is used to transfer the data from typescript code to HTML.
                         {{data}}
                         ts  ---->html  

--------------------------------------------------------------------------------------------------------------------------------------------------

2.Property Binding : It is machanism that allows you to set the value of an HTML elelment property from component property
                     [Property]="data"
                     ts ---> html

--------------------------------------------------------------------------------------------------------------------------------------------------
3.Event Binding (Event) :  Event binding is used to handle the events raised by the userss action like button click etc
                           "expression"
                           html ---> ts

--------------------------------------------------------------------------------------------------------------------------------------------------
4.Both ways : Two way data binding 
              ngModel [("ngModel")]="data"
