import { Observable, of, Subscription, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss'],
})
export class SearchLeagueComponent implements OnInit {
  form: FormGroup;

  filtered$: Observable<any>;

  @Output() selection = new EventEmitter();

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    });

    this.filtered$ = combineLatest([
      this.apiService.getLeagues().pipe(
        map((leagues) =>
          leagues.map((league) => ({
            ...league,
            nameLowerCase: league.name.toLowerCase(),
          }))
        )
      ),
      this.form.controls.search.valueChanges.pipe(
        map((search) => search.toLowerCase())
      ),
    ]).pipe(
      map(([leagues, searchLowerCase]) => {
        const filtered = leagues.filter(
          (league) =>
            searchLowerCase && league.nameLowerCase.includes(searchLowerCase)
        );

        const match =
          filtered.length === 1 &&
          filtered[0].nameLowerCase === searchLowerCase ? filtered[0] : null;

        return { filtered: match ? [] : filtered, searchLowerCase, match };
      }),
      tap(filtered => {
        if (filtered.match) {
          this.selection.emit(filtered.match);
        }
      })
    );
  }

  setSearch(leagueName: string) {
    this.form.controls.search.setValue(leagueName);
  }
}
