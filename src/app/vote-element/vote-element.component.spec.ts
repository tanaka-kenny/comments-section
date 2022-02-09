import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteElementComponent } from './vote-element.component';

describe('VoteElementComponent', () => {
  let component: VoteElementComponent;
  let fixture: ComponentFixture<VoteElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
