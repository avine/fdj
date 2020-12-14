import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { LeagueWithTeamsApi } from '@fdj/shared';

import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LeagueTeamsResolver implements Resolve<any> {
  constructor(private apiService: ApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LeagueWithTeamsApi> {
    return this.apiService.getTeamsByLeagueName(route.params.leagueName).pipe(
      catchError(() => {
        this.router.navigate(['/page-not-found']);
        return of(null);
      })
    );
  }
}
