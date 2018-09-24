import { Component } from '@angular/core';
import {  Modal, ModalController, ModalOptions, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public nb_notifs: any;

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public alert: AlertController,
        public http: HTTP,
        public navParams: NavParams,
        public modal: ModalController,
        public screenOrientation: ScreenOrientation,
        public plt: Platform,
        public popoverCtrl: PopoverController) {
            if (this.plt.is('ios') || this.plt.is('android')) {
                // set to landscape
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
           }
           this.http.get('https://tablepocserve.eu-gb.mybluemix.net/get_reason', {}, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
               .then(data => {
                   //console.log(data.data);
                   var json = JSON.parse(data.data);
                   this.nb_notifs = json.length;
               })
               .catch(error => {
                   console.log(error);
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
