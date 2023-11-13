import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar-houses',
  templateUrl: './navbar-houses.component.html',
  styleUrls: ['./navbar-houses.component.css'],
})
export class NavbarHousesComponent {
  routingHouses = [
    {
      name: 'Casas',
      path: '',
      icon: '/assets/navbar/house.png',
    },

    {
      name: 'departamentos',
      path: '/departments',
      icon: '/assets/navbar/building.png',
    },
    {
      name: 'terrenos',
      path: '/lands',
      icon: '/assets/navbar/land.png',
    },
    {
      name: 'residencial',
      path: '/homes',
      icon: '/assets/navbar/residencial.png',
    },
  ];
}
