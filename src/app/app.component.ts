import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>SSO OAuth2 App</h1>
      <button *ngIf="!isLoggedIn()" (click)="login()">Login</button>
      <button *ngIf="isLoggedIn()" (click)="logout()">Logout</button>
      <div *ngIf="isLoggedIn()">
        <h2>Welcome, {{ name }}</h2>
        <app-menu></app-menu>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {
    this.oauthService.setupAutomaticSilentRefresh();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get name() {
    const claims = this.oauthService.getIdentityClaims();
    return claims ? claims['name'] : null;
  }
}
