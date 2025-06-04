import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Router} from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export  class Tab2Page implements OnInit,ViewWillEnter {

  constructor(private router: Router) {}

  ngOnInit() {
   //  console.log('Tab2 loaded');
   //   this.router.navigate(['/tabs/tab4']);
  }
  ionViewWillEnter() {
   // console.log('ionViewWillEnter - redirecting');
    //this.router.navigate(['/tabs/tab4']);
  }
  
    
}
