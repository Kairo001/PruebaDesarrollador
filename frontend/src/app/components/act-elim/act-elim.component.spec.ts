import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActElimComponent } from './act-elim.component';

describe('ActElimComponent', () => {
  let component: ActElimComponent;
  let fixture: ComponentFixture<ActElimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActElimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActElimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
