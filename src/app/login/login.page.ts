import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
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
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // Call API or AuthService here
    console.log('Login with', this.username, this.password);
    this.router.navigate(['/tabs']);
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
