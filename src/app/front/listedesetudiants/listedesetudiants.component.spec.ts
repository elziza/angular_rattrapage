import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesetudiantsComponent } from './listedesetudiants.component';

describe('ListedesetudiantsComponent', () => {
  let component: ListedesetudiantsComponent;
  let fixture: ComponentFixture<ListedesetudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedesetudiantsComponent]
    });
    fixture = TestBed.createComponent(ListedesetudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
