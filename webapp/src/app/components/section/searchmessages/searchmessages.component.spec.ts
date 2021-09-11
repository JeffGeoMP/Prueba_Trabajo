import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmessagesComponent } from './searchmessages.component';

describe('SearchmessagesComponent', () => {
  let component: SearchmessagesComponent;
  let fixture: ComponentFixture<SearchmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
