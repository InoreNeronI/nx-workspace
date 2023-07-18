import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PromiseComponent } from './promise.component';

describe('PromiseComponent', () => {
  let component: PromiseComponent;
  let fixture: ComponentFixture<PromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PromiseComponent]
    });
    fixture = TestBed.createComponent(PromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass', fakeAsync(() => {
    component.ngOnInit();
    component.checkLogic();
    component.myPromise = new Promise<boolean>((resolve, reject) => {
      tick(3000);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.isOnline = true;
        resolve(component.isOnline);
      });
    });
    expect(component.isOnline).toBe(true);
  }));

  it('should fail', fakeAsync(() => {
    component.ngOnInit();
    component.checkLogic();
    component.myPromise = new Promise<boolean>((resolve, reject) => {
      tick(3000);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        reject(new Error('DB error!'));
      });
    });
    expect(component.isOnline).toBe(true);
  }));

});
