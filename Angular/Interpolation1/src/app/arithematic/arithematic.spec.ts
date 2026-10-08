import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arithematic } from './arithematic';

describe('Arithematic', () => {
  let component: Arithematic;
  let fixture: ComponentFixture<Arithematic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arithematic],
    }).compileComponents();

    fixture = TestBed.createComponent(Arithematic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
