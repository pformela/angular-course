import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public onLoadServers(): void {
    this.router.navigate(['/servers'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  public onLogin(): void {
    this.authService.login();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
