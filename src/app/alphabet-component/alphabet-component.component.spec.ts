import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetComponentComponent } from './alphabet-component.component';

describe('AlphabetComponentComponent', () => {
  let component: AlphabetComponentComponent;
  let fixture: ComponentFixture<AlphabetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabetComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
