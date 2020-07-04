import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitaservicosComponent } from './litaservicos.component';

describe('LitaservicosComponent', () => {
  let component: LitaservicosComponent;
  let fixture: ComponentFixture<LitaservicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitaservicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitaservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
