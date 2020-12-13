import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeagueSummary } from '@fdj/shared';

import { ApiService } from '../../../services/api.service';
import { escapeRegExp } from '../../../utils.ts/escape-regexp';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss'],
})
export class SearchLeagueComponent implements OnInit {
  @Output() selected = new EventEmitter<LeagueSummary>();

  private readonly searchMinLength = 2;

  formGroup: FormGroup;

  state$: Observable<{
    suggestions: LeagueSummary[];
    match: LeagueSummary;
  }>;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initState();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({ search: [''] });
  }

  private initState(): void {
    this.state$ = combineLatest([this.getLeagues(), this.getSearch()]).pipe(
      map(([leagues, search]) => {
        const suggestions = this.getSuggestions(leagues, search);
        const match = this.matchLeague(suggestions, search);
        return { suggestions: match ? [] : suggestions, match };
      }),
      tap((state) => {
        if (state.match) {
          this.selected.emit(state.match);
        }
      })
    );
  }

  private getLeagues(): Observable<LeagueSummary[]> {
    return this.apiService.getLeaguesSummary();
  }

  private getSearch(): Observable<string> {
    return this.formGroup.controls.search.valueChanges.pipe(
      map((search: string) =>
        search.length >= this.searchMinLength ? search : ''
      )
    );
  }

  private getSuggestions(
    leagues: LeagueSummary[],
    search: string
  ): LeagueSummary[] {
    if (!search) {
      return [];
    }
    return leagues.filter((league) =>
      new RegExp(this.getSearchForRegExp(search), 'i').test(league.name)
    );
  }

  private getSearchForRegExp(search: string): string {
    return escapeRegExp(search.trim().replace(/\s+/g, ' '));
  }

  private matchLeague(
    leagues: LeagueSummary[],
    search: string
  ): LeagueSummary | null {
    if (leagues.length !== 1) {
      return null;
    }
    const [league] = leagues;
    const match = new RegExp(`^${this.getSearchForRegExp(search)}$`, 'i').test(
      league.name
    );
    if (!match) {
      return null;
    }
    return league;
  }

  updateSearch(leagueName: string): void {
    this.formGroup.controls.search.setValue(leagueName);
  }
}
