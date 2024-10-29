import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastedItemsComponent } from './tasted-items.component';

describe('TastedItemsComponent', () => {
  let component: TastedItemsComponent;
  let fixture: ComponentFixture<TastedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastedItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
