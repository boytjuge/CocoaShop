import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { LoginService } from '../services/login.service';
import { ToastController } from '@ionic/angular';
import {  
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';  // ✅ นำเข้า IonIcon ด้วย


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonLabel,
    IonButton,
    IonIcon ,   // ✅ เพิ่มตรงนี้
    FormsModule
    
  ]
})
export class LoginPage {
  username:string = '';
  password:string = '';

  constructor(
  private router: Router,
  private loginservice: LoginService,
  private toastController: ToastController
  ) {}

  loading = false;

onLogin() {
  this.loading = true;
  this.loginservice.check_login({ email: this.username, password: this.password }).subscribe({
    next: (res) => {
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
    //  this.router.navigate(['/tab']);
      this.router.navigate(['/tabs/tab1']);

      this.loading = false;
    },
    error: async (err) => {
      this.loading = false;
      const toast = await this.toastController.create({
        message: 'Login failed. กรุณาตรวจสอบข้อมูลอีกครั้ง',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  });
}


  loginWithGoogle() {
    console.log('Google login clicked');
    // TODO: Implement Google login via Capacitor or redirect
  }

  loginWithFacebook() {
    console.log('Facebook login clicked');
    // TODO: Implement Facebook login
  }

  loginWithLine() {
    console.log('Line login clicked');
    // TODO: Implement LINE login
  }
}
