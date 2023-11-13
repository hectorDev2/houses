import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Property } from 'src/app/interfaces/properties.interfaces';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-lands-page',
  templateUrl: './lands-page.component.html',
  styleUrls: ['./lands-page.component.css'],
})
export class LandsPageComponent {
  loading: boolean = false;
  properties: Property[] = [];

  constructor(private propertiesServices: PropertiesService) {}

  getProperties() {
    this.loading = true;

    this.propertiesServices
      .fetchTypeProperties('land')
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
