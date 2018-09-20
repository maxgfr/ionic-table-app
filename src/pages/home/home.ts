import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public alert: AlertController) {

    }

    save() {
        /*this.presentToast('erreur');
        this.showAlert('sisi');*/
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
