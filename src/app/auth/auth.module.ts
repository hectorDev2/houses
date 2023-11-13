import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutAuthComponent } from './layout/layout-auth/layout-auth.component';
import { AuthSignUpComponent } from './pages/sign-up-page/signup-page.component';

@NgModule({
  declarations: [LoginPageComponent, AuthSignUpComponent, LayoutAuthComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
