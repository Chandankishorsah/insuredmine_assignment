import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularDetailsComponent } from './particular-details.component';

describe('ParticularDetailsComponent', () => {
  let component: ParticularDetailsComponent;
  let fixture: ComponentFixture<ParticularDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticularDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
