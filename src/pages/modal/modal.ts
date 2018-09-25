import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})

export class ModalPage {

  constructor(private navParams: NavParams, private view: ViewController, private http: HTTP, private alert: AlertController, public events: Events) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  save(id,name) {
      console.log(id , name);
      this.http.post('https://tablepocserve.eu-gb.mybluemix.net/register_reason', { id : id , name: name }, {})
          .then(data => {
              console.log(data);
          })
          .catch(error => {
              console.log(error);
          });
          this.closeModal();
          this.events.publish('nbnotifs:plus', 1);
          this.showAlert("L'évènement a été sauvegardé à la base de donnée avec succès!");
  }

  closeModal() {
    this.view.dismiss();
  }

  showAlert(msg) {
      let alert = this.alert.create({
          title: 'Alert',
          subTitle: msg,
          buttons: ['OK']
      });
      alert.present();
  }
}
