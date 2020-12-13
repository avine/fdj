import { Component, Input, OnInit } from '@angular/core';
import { PlayerApi } from '@fdj/shared';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: PlayerApi;

  constructor() { }

  ngOnInit(): void {
  }

}
