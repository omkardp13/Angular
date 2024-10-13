// user-detail.component.ts
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div>
      <h3>User Details</h3>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  `
})
export class UserDetailComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() user: { name: string, email: string } = { name: '', email: '' };


  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit - Component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Changes detected', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - Custom change detection logic');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - Content projected into component');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - Content checked after initialization/changes');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - View initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - View checked after initialization/changes');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - Component destroyed');
  }
}
