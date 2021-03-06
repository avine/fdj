import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeagueApi } from '@fdj/shared';

import { escapeRegExp } from '../../shared/utils/escape-regexp';
import { LeagueSearchState } from './league-search.types';

@Component({
  selector: 'app-league-search',
  templateUrl: './league-search.component.html',
  styleUrls: ['./league-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSearchComponent implements OnInit {
  @Input() leagues: LeagueApi[];

  @Output() selected = new EventEmitter<LeagueApi>();

  private readonly searchMinLength = 2;

  formGroup: FormGroup;

  state$: Observable<LeagueSearchState>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.initState();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({ search: [''] });
  }

  private initState(): void {
    this.state$ = this.getSearch().pipe(
      map((search) => {
        const suggestions = this.getSuggestions(search);
        const selected = this.matchSuggestion(suggestions, search);
        return { suggestions: selected ? [] : suggestions, selected };
      }),
      tap((state) => {
        if (state.selected) {
          this.selected.emit(state.selected);
        }
      })
    );
  }

  private getSearch(): Observable<string> {
    return this.formGroup.controls.search.valueChanges.pipe(
      map((search: string) =>
        search.length >= this.searchMinLength ? search : ''
      )
    );
  }

  private getSuggestions(search: string): LeagueApi[] {
    if (!search) {
      return [];
    }
    return this.leagues.filter((league) =>
      new RegExp(this.getEscapedSearch(search), 'i').test(league.name)
    );
  }

  private matchSuggestion(
    leagues: LeagueApi[],
    search: string
  ): LeagueApi | null {
    if (leagues.length !== 1) {
      return null;
    }
    const [league] = leagues;
    const match = new RegExp(`^${this.getEscapedSearch(search)}$`, 'i').test(
      league.name
    );
    if (!match) {
      return null;
    }
    return league;
  }

  private getEscapedSearch(search: string): string {
    return escapeRegExp(search.trim().replace(/\s+/g, ' '));
  }

  updateSearch(leagueName: string): void {
    this.formGroup.controls.search.setValue(leagueName);
  }
}
