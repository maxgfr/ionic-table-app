import { Component } from '@angular/core';
import {  Modal, ModalController, ModalOptions, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { Events } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the ReceptorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receptor',
  templateUrl: 'receptor.html',
})
export class ReceptorPage {

    nb_notifs: number;

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public alert: AlertController,
        public navParams: NavParams,
        public modal: ModalController,
        public screenOrientation: ScreenOrientation,
        public plt: Platform,
        public popoverCtrl: PopoverController,
        public events: Events,
        public http: HTTP) {
            if (this.plt.is('ios') || this.plt.is('android')) {
                // set to landscape
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
           }
           this.nb_notifs = 0;
           events.subscribe('nbnotifs:change', (value) => {
               this.nb_notifs = value;
          });
          this.http.get('https://tablepocserve.eu-gb.mybluemix.net/get_reason', {}, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
              .then(data => {
                  console.log(data.data);
                  var json = JSON.parse(data.data);
                  this.nb_notifs = json.length;
              })
              .catch(error => {
                  console.log(error.error);
              });
    }

    onChange(value) {
        console.log(value);
        if(value < 0 || value > 6) {
            this.openModal();
        }

    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(NotificationsPage);
        popover.present({
          ev: myEvent
        });
    }

    openModal() {

        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };

        const myModalData = {
          id: 'id_random',
          name: 'name_random'
        };

        const myModal: Modal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);

        myModal.present();

        myModal.onDidDismiss((data) => {
          console.log("I have dismissed.");
          console.log(data);
        });

        myModal.onWillDismiss((data) => {
          console.log("I'm about to dismiss");
          console.log(data);
        });

    }

    presentToast(msg) {
       let toast = this.toastCtrl.create({
           message: msg,
           duration: 3000,
           position: 'bottom'
       });

       toast.onDidDismiss(() => {
           console.log('Dismissed toast');
       });

       toast.present();
    }

}
