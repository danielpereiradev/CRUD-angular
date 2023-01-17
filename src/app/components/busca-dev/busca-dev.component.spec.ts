import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDevComponent } from './busca-dev.component';

describe('BuscaDevComponent', () => {
  let component: BuscaDevComponent;
  let fixture: ComponentFixture<BuscaDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
