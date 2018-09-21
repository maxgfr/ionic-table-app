import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public alert: AlertController,
        public http: HTTP,
        public navParams: NavParams) {
    }

    save(prob,fact) {
        console.log(prob , fact);
        this.http.post('https://tablepocserve.eu-gb.mybluemix.net/register_reason', { id : prob , name: fact }, {})
            .then(data => {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
            })
            .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
            this.showAlert("L'évènement a été sauvegardé à la base de donnée avec succès!");
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
