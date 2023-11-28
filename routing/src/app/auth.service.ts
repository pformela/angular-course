import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public loggedIn: boolean = false;

  public async isAuthenticated(): Promise<boolean> {
    return new Promise((resolve: (value: boolean) => void) => {
      setTimeout(() => {
        this.login();
        resolve(this.loggedIn);
      }, 800);
    });
  }

  public login(): void {
    this.loggedIn = true;
  }

  public logout(): void {
    this.loggedIn = false;
  }
}
