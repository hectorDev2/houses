import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() routerLink?: string | null = null;
  @Input() label: string | null = null;
  @Input() isBold: boolean = false;
  @Input() link!: string;
}
