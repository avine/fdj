import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueWithTeamsApi } from '@fdj/shared';

@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsComponent {
  @Input() leagueWithTeams: LeagueWithTeamsApi;
}
