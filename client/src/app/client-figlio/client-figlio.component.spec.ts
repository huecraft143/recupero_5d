import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFiglioComponent } from './client-figlio.component';

describe('ClientFiglioComponent', () => {
  let component: ClientFiglioComponent;
  let fixture: ComponentFixture<ClientFiglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFiglioComponent]
    });
    fixture = TestBed.createComponent(ClientFiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
