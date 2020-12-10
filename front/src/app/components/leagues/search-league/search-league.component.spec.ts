import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLeagueComponent } from './search-league.component';

describe('SearchLeagueComponent', () => {
  let component: SearchLeagueComponent;
  let fixture: ComponentFixture<SearchLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
