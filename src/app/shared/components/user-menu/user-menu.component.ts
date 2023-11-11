import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  userFromEmitterSubscription$?: Subscription;
  currentUser?: any | null = null;
  isOpen: boolean = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  getScrollHeight() {
    if (window.scrollY > 0 && this.isOpen) this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.userFromEmitterSubscription$?.unsubscribe();
  }

  toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };

  onSell = () => {
    // const isLoggedIn = !!this.authService.getCurrentUser();
    // if (isLoggedIn) {
    //   this.router.navigate(['/become-an-agent'], {
    //     relativeTo: this.route,
    //   });
    //   this.cookieService.set('stepperAction', 'Publish');
    // } else {
    //   this.modalService.setModalData({
    //     component: LoginModalComponent,
    //     title: 'Login',
    //     data: { loginAction: 'Login' },
    //     maxWidth: 'max-w-[600px]',
    //     enableClose: true,
    //   });
    // }
  };

  handleSignOut = () => {
    // this.authService.logout();
  };

  handleloginModal = (loginAction: any) => {
    this.toggleOpen();
    // this.loginAction = loginAction;

    // this.modalService.setModalData({
    //   component: LoginModalComponent,
    //   title: loginAction,
    //   data: { loginAction },
    //   maxWidth: 'max-w-[600px]',
    //   enableClose: true,
    // });
  };

  getLoginAction = () => {
    // return this.loginAction;
  };

  getCurrentUser() {
    // const user = this.authService.getCurrentUser();
    // this.currentUser = user;
  }

  getUserFromEmitter() {
    // this.userFromEmitterSubscription$ = this.authService.userEmitter.subscribe(
    //   (user) => {
    //     this.currentUser = user;
    //   }
    // );
  }
}
