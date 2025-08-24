import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';   // 👈 importa aqui
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,              // 👈 precisa marcar standalone
  imports: [FormsModule,CommonModule],        // 👈 habilita ngModel
  templateUrl: './login.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const ok = this.auth.login(this.username, this.password);
    if (ok) {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}
