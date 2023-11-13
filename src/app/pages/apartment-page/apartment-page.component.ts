import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Property } from 'src/app/interfaces/properties.interfaces';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-apartment-page',
  templateUrl: './apartment-page.component.html',
  styleUrls: ['./apartment-page.component.css'],
})
export class ApartmentPageComponent {
  loading: boolean = false;
  properties: Property[] = [];

  constructor(private propertiesServices: PropertiesService) {}

  getProperties() {
    this.loading = true;

    this.propertiesServices
      .fetchTypeProperties('department')
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
