import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvcontratComponent } from './nouvcontrat.component';

describe('NouvcontratComponent', () => {
  let component: NouvcontratComponent;
  let fixture: ComponentFixture<NouvcontratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvcontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
