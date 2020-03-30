import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {
  science:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) 
  {
    //Get API
    this.http.get('http://newsapi.org/v2/top-headlines?country=th&category=science&apiKey=bb18818c3df7477bbe2b608146975e03').map(res=>res.json()).subscribe(data=>{
      this.science=data.articles;
      console.log(this.science);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SciencePage');
  }

gotoDetail(item:any){
  this.navCtrl.push(DetailPage,{item:item})
  }

}
