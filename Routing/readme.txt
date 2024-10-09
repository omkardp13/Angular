1.Routing---> Used to manage navigation between diffrent views or components within single page application.

-----------------------------------------------------------------------------------------------------------------------------------------------
2.Router Outlet---> Directives acts as a placeholder where the router component will be displayed.
                    <router-outlet></router-outlet>
-----------------------------------------------------------------------------------------------------------------------------------------------

3.Router Link Directive ---> Use route link directive to navigate between routes without loading the page.
                            <a routerLink="/home">Home</a>
-----------------------------------------------------------------------------------------------------------------------------------------------
4.Programatic Routes(Navigation) ---> You can navigate programatically using router service.

import { Router } from '@angular/router';

constructor(private router:Router)
{
}

NavigationToHome()
{
    this.router.navigate(['/home']);
}
-----------------------------------------------------------------------------------------------------------------------------------------------
Features:

1.Lazy Loading : load modules only when required.

2.Route Guards : Protect routes with services like CanActive,CanDeactive

3.Route Parameters : Pass dynamic data through URL.

4.Wildcard routes : Redirects unknown path to default route.

5.Query Parameters : Add query params loke ?id=33;

6.Route Resolver:Reload data before navigation.
