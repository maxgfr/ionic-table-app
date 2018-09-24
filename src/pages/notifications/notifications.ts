import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Events } from 'ionic-angular';

@Component({
   templateUrl: 'notifications.html'
})
export class NotificationsPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string, id_cloudant: string}>;

    constructor(public viewCtrl: ViewController, public navParams: NavParams, public http: HTTP, public events: Events) {
      // If we navigated to this page, we will have an item available as a nav param
      this.selectedItem = navParams.get('item');

      // Let's populate this page with some filler content for funzies
      this.icons = ['build'];

      this.items = [];

      this.http.get('https://tablepocserve.eu-gb.mybluemix.net/get_reason', {}, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
          .then(data => {
              console.log(data.data);
              var json = JSON.parse(data.data);
              this.events.publish('nbnotifs:change', json.length);
              for (let i = 0; i < json.length; i++) {
                //console.log(json[i]);
                this.items.push({
                  title: json[i].id,
                  note: json[i].name,
                  id_cloudant: json[i].id_cloudant,
                  icon: 'build'
                });
              }
          })
          .catch(error => {
              console.log(error);
          });

    }

    itemTapped(event, item) {
        console.log(item.id_cloudant);
        let index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.http.delete('https://tablepocserve.eu-gb.mybluemix.net/get_reason',  { id_cloudant : item.id_cloudant }, {})
            .then(data => {
                console.log(data.data);
                var json = JSON.parse(data.data);
                this.events.publish('nbnotifs:change', json.length);
            })
            .catch(error => {
                console.log(error.error);
            });
    }

    close() {
      this.viewCtrl.dismiss();
    }
}
