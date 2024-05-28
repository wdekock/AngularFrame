import { Injectable } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://your-identity-provider.com',  // Replace with your identity provider
  redirectUri: window.location.origin + '/index.html',
  clientId: 'your-client-id',  // Replace with your client ID
  responseType: 'code',
  scope: 'openid profile email', // Adjust scopes as needed
  showDebugInformation: true,
};

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {
  get config(): AuthConfig {
    return authConfig;
  }
}
