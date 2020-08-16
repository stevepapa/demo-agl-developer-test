import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetsComponent } from './list-pets.component';

describe('ListPetsComponent', () => {
  let component: ListPetsComponent;
  let fixture: ComponentFixture<ListPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPetsComponent);
    component = fixture.componentInstance;
    component.ownerGender = 'Male';
    component.pets = [];
    fixture.detectChanges();
  });

  it('should have gender title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.list-title').textContent).toContain('Male');
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });


});
