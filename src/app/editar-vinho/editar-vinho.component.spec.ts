import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVinhoComponent } from './editar-vinho.component';

describe('EditarVinhoComponent', () => {
  let component: EditarVinhoComponent;
  let fixture: ComponentFixture<EditarVinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
