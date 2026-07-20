import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosystems } from './infosystems';

describe('Infosystems', () => {
  let component: Infosystems;
  let fixture: ComponentFixture<Infosystems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infosystems],
    }).compileComponents();

    fixture = TestBed.createComponent(Infosystems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
