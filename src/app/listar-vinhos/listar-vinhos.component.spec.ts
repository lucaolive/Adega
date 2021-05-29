import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVinhosComponent } from './listar-vinhos.component';

describe('ListarVinhosComponent', () => {
  let component: ListarVinhosComponent;
  let fixture: ComponentFixture<ListarVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
