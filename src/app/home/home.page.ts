import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ApiService } from '../services/api.service';
import { SERVER_URL } from '../../environments/environment';
import { Comic } from '../models/comic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  comics: Array<Comic>;

  constructor(public splashScreen: SplashScreen, public apiService: ApiService) {
    this.comics = [];
  }

  ngOnInit(){
    this.getComics();
  }

  getComics(){
    const url = SERVER_URL + '/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6';
    this.apiService.get(url).subscribe(res => {
      if (res['code'] === 200){
        this.comics = res['data'].results;
        for (const comicTemp of this.comics){
          comicTemp.likes = 0;
        }
      } else{
        this.getComics();
      }
    });
  }
}
