import { Component } from '@angular/core';
import {  Modal, ModalController, ModalOptions, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,
      public alert: AlertController,
      public http: HTTP,
      public navParams: NavParams,
      public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceptorPage');
  }

  openModal() {

      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false
      };

      const myModalData = {
        name: 'Paul Halliday',
        occupation: 'Developer'
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

 showAlert(msg) {
     let alert = this.alert.create({
         title: 'Alert',
         subTitle: msg,
         buttons: ['OK']
     });
     alert.present();
 }

}
