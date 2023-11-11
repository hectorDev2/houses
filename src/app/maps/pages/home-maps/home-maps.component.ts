import { Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-home-maps',
  templateUrl: './home-maps.component.html',
  styleUrls: ['./home-maps.component.css'],
})
export class HomeMapsComponent {
  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'html dont found';
    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-72.147795, -13.457394], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    map.on('load', () => {
      // Agrega la fuente de datos
      map.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-72.150212, -13.459188],
                [-72.148572, -13.459606],
                [-72.147915, -13.457314],
                [-72.149614, -13.457001],
                [-72.150212, -13.459188],
              ],
            ],
          },
          properties: {
            nombre: 'Terreno 1',
            area: 1000,
          },
        },
      });

      // Agrega la capa de relleno
      map.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5,
        },
      });

      // Agrega la capa de contorno
      map.addLayer({
        id: 'outline',
        type: 'line',
        source: 'maine',
        layout: {},
        paint: {
          'line-color': '#000',
          'line-width': 3,
        },
      });
    });
  }
}
