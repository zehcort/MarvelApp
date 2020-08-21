import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comics: any;

  constructor(public http: HttpClient, public splashScreen: SplashScreen) {
    this.getComics();
  }

  getComics(){
    this.splashScreen.show();
    const url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6';
    this.http.get(url).subscribe(res => {
      if(res['code'] == 200){
        this.comics = res['data'].results;
        for(let comicTemp of this.comics){
          comicTemp.likes = 0;
        }
      } else{
        this.getComics();
      }

    });
    this.splashScreen.hide();
  }

  increaseLikes(comic){
    comic.likes = comic.likes + 1;
  }

  decreaseLikes(comic){
    comic.likes = comic.likes - 1;
  }

}
