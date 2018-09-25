/*
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

    apiUrl = 'https://tablepocserve.eu-gb.mybluemix.net';

    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');
    }

    getReason() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/get_reason',
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin' : '*'
                })
            })
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    deleteReason(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            this.http.delete(this.apiUrl+'/get_reason',
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                params: new HttpParams().set('id_cloudant', data.id_cloudant)
            })
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
*/
