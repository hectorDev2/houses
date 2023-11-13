import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../interfaces/properties.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  properties: Property[] = [];
  constructor(private http: HttpClient) {}

  get getProperties() {
    return this.fetchProperties();
  }

  fetchProperties() {
    return this.http.get('http://localhost:3000/properties');
  }
  fetchTypeProperties(type: string) {
    return this.http.get(`http://localhost:3000/properties?type=${type}`);
  }
}
