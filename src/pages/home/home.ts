import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, public rest: RestApiProvider) {}
  countries: string[];
  errorMessage: string;

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  ionViewDidLoad() {
    this.getCountries();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
