
import { Component , OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonSearchbar } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar],
})
export class Tab1Page {
  results: any[] = [];
  constructor( private apiService :ApiService) {}

   ngOnInit() {
    // this.apiService.getData().subscribe((res) => {
    //   this.results = res;
    // });

      console.log('API Data:');
  }

  onSearchChange(event: any) {
    const searchTerm = event.detail.value;
   // setTimeout(()=> console.log(searchTerm),1000);
    // เพิ่ม logic สำหรับกรองข้อมูล หรืออื่นๆ ได้ที่นี่
  }


}




