import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  teams: any;

  selection: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  setSelection(selection: any) {
    this.selection = selection;
    this.apiService.getTeams(selection._id).subscribe(teams => {
      this.teams = teams;
    });
  }
}
