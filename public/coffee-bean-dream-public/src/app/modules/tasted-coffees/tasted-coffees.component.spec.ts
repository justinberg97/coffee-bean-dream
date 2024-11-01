import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastedCoffeesComponent } from './tasted-coffees.component';

describe('TastedCoffeesComponent', () => {
  let component: TastedCoffeesComponent;
  let fixture: ComponentFixture<TastedCoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastedCoffeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastedCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
