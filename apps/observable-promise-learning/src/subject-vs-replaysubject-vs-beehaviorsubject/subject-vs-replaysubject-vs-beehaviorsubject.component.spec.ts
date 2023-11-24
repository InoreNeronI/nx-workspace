import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVsReplaysubjectVsBeehaviorsubjectComponent } from './subject-vs-replaysubject-vs-beehaviorsubject.component';

describe('SubjectVsReplaysubjectVsBeehaviorsubjectComponent', () => {
  let component: SubjectVsReplaysubjectVsBeehaviorsubjectComponent;
  let fixture: ComponentFixture<SubjectVsReplaysubjectVsBeehaviorsubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubjectVsReplaysubjectVsBeehaviorsubjectComponent],
    });
    fixture = TestBed.createComponent(
      SubjectVsReplaysubjectVsBeehaviorsubjectComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
