import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthConfigService } from './auth/auth-config.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OAuthModule.forRoot()],
  providers: [AuthConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oauthService: OAuthService, private authConfigService: AuthConfigService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(this.authConfigService.config);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
