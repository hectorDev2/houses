import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Property } from 'src/app/interfaces/properties.interfaces';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  loading: boolean = false;
  properties: Property[] = [];

  constructor(private propertiesServices: PropertiesService) {}

  getProperties() {
    this.loading = true;

    this.propertiesServices
      .fetchProperties()
      .pipe(tap(() => (this.loading = false)))
      .subscribe((res) => (this.properties = res as Property[]));
  }
  get allProperties() {
    return this.properties;
  }

  ngOnInit(): void {
    this.getProperties();
  }
}
