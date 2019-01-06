import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionesUsuarioComponent } from './conversaciones-usuario.component';

describe('ConversacionesUsuarioComponent', () => {
  let component: ConversacionesUsuarioComponent;
  let fixture: ComponentFixture<ConversacionesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversacionesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
