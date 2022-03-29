import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Climbing Photos! Courtesy of Climbing Magazine';
  image1 = 'https://www.climbing.com/wp-content/uploads/2018/10/siadak_austin_20170107_01010_gn-web.jpg?width=730';
  image2 = 'https://www.climbing.com/wp-content/uploads/2018/10/down-under_gn-web.jpg?width=730';
  image3 = 'https://www.climbing.com/wp-content/uploads/2018/10/bensanfordmedia1-web.jpg?width=730';

  constructor() { }

  ngOnInit() {
  }

}