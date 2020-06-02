import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByFieldsComponent } from './search-by-fields.component';

describe('SearchByFieldsComponent', () => {
  let component: SearchByFieldsComponent;
  let fixture: ComponentFixture<SearchByFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
