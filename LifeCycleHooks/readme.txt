Component Life Cycles: Consist various stages from creation to destruction .
                       Component Instantiating
                       Rendering the component html view
                       Creating the child component(if required)
                       Destroying the component.
                      

1.NgOnChanges ---> Called when input properties of the component changes.
                   @Input Decorator.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2.NgOnInit ---> Called once,after the component initialized.
                Component Initialization.
                Good place to to put initiliazation logic.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3.NgDoCheck ---> Called during every change detection run.
                 Button Click,Property Change
                Allows you to implement your own change detection.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4.NgAfterContentInit ---> Called after content (ng-content) has been projected into the component.
                          
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5.NgAfterContentChecked ---> Called after every check of the projected content.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6.NgAfterViewInit --->Called after the components view & (Childrents View) has been initiated.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
7.NgAfterViewChecked ---> Called after every check of the components view 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
8.NgOnDestroy ---> Called just before compoent is destroyed.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
