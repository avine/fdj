import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeagueSummary } from '@fdj/shared';

import { ApiService } from '../../../services/api.service';
import { LeagueLowerCase } from './search-league.types';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss'],
})
export class SearchLeagueComponent implements OnInit {
  private readonly searchMinLength = 2;

  formGroup: FormGroup;

  state$: Observable<{
    suggestions: LeagueLowerCase[];
    match: LeagueSummary;
  }>;

  @Output() selected = new EventEmitter<LeagueSummary>();

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.initState();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({ search: [''] });
  }

  private initState(): void {
    this.state$ = combineLatest([
      this.getLeaguesLowerCase(),
      this.getSearchLowerCase(),
    ]).pipe(
      map(([leaguesLowerCase, searchLowerCase]) => {
        const leagues = this.getFilteredLeagues(
          leaguesLowerCase,
          searchLowerCase
        );
        const match = this.getMatch(leagues, searchLowerCase);
        return { suggestions: match ? [] : leagues, match };
      }),
      tap((state) => {
        if (state.match) {
          this.selected.emit(state.match);
        }
      })
    );
  }

  private getLeaguesLowerCase(): Observable<LeagueLowerCase[]> {
    return this.apiService.getLeaguesSummary().pipe(
      map((leagues) =>
        leagues.map((league) => ({
          ...league,
          nameLowerCase: league.name.toLowerCase(),
        }))
      )
    );
  }

  private getSearchLowerCase(): Observable<string> {
    return this.formGroup.controls.search.valueChanges.pipe(
      map((search: string) =>
        search.length >= this.searchMinLength ? search.toLowerCase() : ''
      )
    );
  }

  private getFilteredLeagues(
    leaguesLowerCase: LeagueLowerCase[],
    searchLowerCase: string
  ): LeagueLowerCase[] {
    if (!searchLowerCase) {
      return [];
    }
    const leagues = leaguesLowerCase.filter((league) =>
      league.nameLowerCase.includes(searchLowerCase)
    );
    return leagues;
  }

  private getMatch(
    leaguesLowerCase: LeagueLowerCase[],
    searchLowerCase: string
  ): LeagueSummary | null {
    if (
      leaguesLowerCase.length === 1 &&
      leaguesLowerCase[0].nameLowerCase === searchLowerCase
      ) {
      const { _id, name } = leaguesLowerCase[0];
      return { _id, name };
    }
    return null;
  }

  updateSearch(leagueName: string): void {
    this.formGroup.controls.search.setValue(leagueName);
  }
}
