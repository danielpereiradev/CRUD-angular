import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEdtarComponent } from './tela-edtar.component';

describe('TelaEdtarComponent', () => {
  let component: TelaEdtarComponent;
  let fixture: ComponentFixture<TelaEdtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEdtarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEdtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
