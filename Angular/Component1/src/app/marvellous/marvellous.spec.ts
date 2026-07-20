import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marvellous } from './marvellous';

describe('Marvellous', () => {
  let component: Marvellous;
  let fixture: ComponentFixture<Marvellous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marvellous],
    }).compileComponents();

    fixture = TestBed.createComponent(Marvellous);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
