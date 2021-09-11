import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmessagetagComponent } from './searchmessagetag.component';

describe('SearchmessagetagComponent', () => {
  let component: SearchmessagetagComponent;
  let fixture: ComponentFixture<SearchmessagetagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmessagetagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmessagetagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
