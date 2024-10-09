Auth Guard : is a way to protect certain routes so that only authenticated users can access them

There are five diffrent types of gurds and each of them is called in a particular sequence:

1.CanActive : Check if user can visit specific route.

2.CanActivateChild : Check to see if user can visit a routes children.

3.CanDeactivate : Check to see if user can exit a route.

4.Canload : Check to see if user can route to module that is lazy loaded.

--------------------------------------------------------------------------------------------------------------------------------------------------

