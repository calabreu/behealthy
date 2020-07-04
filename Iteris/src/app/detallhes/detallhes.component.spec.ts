import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallhesComponent } from './detallhes.component';

describe('DetallhesComponent', () => {
  let component: DetallhesComponent;
  let fixture: ComponentFixture<DetallhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
