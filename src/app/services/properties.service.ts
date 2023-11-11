import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../interfaces/properties.interfaces';
import { tap } from 'rxjs';

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
}
