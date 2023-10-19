import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNgEditorComponent } from './teste-ng-editor.component';

describe('TesteNgEditorComponent', () => {
  let component: TesteNgEditorComponent;
  let fixture: ComponentFixture<TesteNgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNgEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteNgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
