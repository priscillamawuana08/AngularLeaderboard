import { Component, OnInit } from '@angular/core';
import { LeaderBoardModel } from '../model/leaderboard-model';
import { LeaderboardService } from '../Service/leaderboard.service';




@Component({
  selector: 'app-overall-rank',
  templateUrl: './overall-rank.component.html',
  styleUrls: ['./overall-rank.component.scss']
})
export class OverallRankComponent implements OnInit {

  rankData: Array<LeaderBoardModel> = []
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getOverAllRanks()
  }

  getOverAllRanks(){
    this.leaderboardService.getOverAllRanks().subscribe((data) => {
      this.rankData = data
      console.log("Ranks: ", this.rankData)
    });
  }

}
