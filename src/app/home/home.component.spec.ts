import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ObservableComponent } from '../observable/observable.component';
import { PromiseComponent } from '../promise/promise.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'promise', component: PromiseComponent },
    { path: 'observable', component: ObservableComponent },
    { path: '**', redirectTo: 'home' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    router.initialNavigation();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go on promise page', waitForAsync(() => {
    component.promiseClick();
    expect(router.navigate).toHaveBeenCalledWith(['/promise']);
  }));

  it('should go on observable page', waitForAsync(() => {
    component.observableClick();
    expect(router.navigate).toHaveBeenCalledWith(['/observable']);
  }));
});
