import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
})
export class HomeComponent {
  constructor(private auth: AuthService) { }

  onLogout() {
    this.auth.logout();
  }
}
