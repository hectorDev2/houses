import { Component, Input } from '@angular/core';
import { Property } from 'src/app/interfaces/properties.interfaces';

@Component({
  selector: 'shared-properties-render-page',
  templateUrl: './property-render-page.component.html',
  styleUrls: ['./property-render-page.component.css'],
})
export class PropertyRenderPageComponent {
  loading: boolean = false;

  @Input()
  properties: Property[] = [];
}
