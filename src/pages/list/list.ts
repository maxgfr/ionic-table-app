import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['build'];

    this.items = [];

    this.http.get('https://tablepocserve.eu-gb.mybluemix.net/get_reason', {}, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
        .then(data => {
            console.log(data.data);
            var json = JSON.parse(data.data);
            for (let i = 0; i < json.length; i++) {
                console.log(json[i]);
              this.items.push({
                title: json[i].id,
                note: json[i].name,
                icon: 'build'
              });
            }
        })
        .catch(error => {
            console.log(error);
        });


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log("to_modify");
  }
}