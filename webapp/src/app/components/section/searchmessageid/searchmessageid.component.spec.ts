import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmessageidComponent } from './searchmessageid.component';

describe('SearchmessageidComponent', () => {
  let component: SearchmessageidComponent;
  let fixture: ComponentFixture<SearchmessageidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmessageidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmessageidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
