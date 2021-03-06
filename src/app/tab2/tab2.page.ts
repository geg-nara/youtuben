import { Component } from '@angular/core';

// Service 
import { GetVideoIdsService } from '../services/get-video-ids.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private getVideoIdsService: GetVideoIdsService
    ){}

  public playlists = [
    /*
    { val: 'フォニックス', isChecked: true },
    { val: '発音記号', isChecked: true },
    { val: '旅行', isChecked: false },
    */
  ];

  getVideoIds(){
    console.log(this.playlists);
  }

  ngOnInit() {
    this.playlists = this.getVideoIdsService.playlists;
    console.log(this.playlists);
  }

}
