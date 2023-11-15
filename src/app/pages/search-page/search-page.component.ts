import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/interfaces/properties.interfaces';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  allProperties!: Property[];
  constructor(
    private route: ActivatedRoute,
    private service: PropertiesService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      let name = params['name']; //si el parámetro se llama 'name'
      name = decodeURI(name);
      console.log(name); // Debería imprimir 'hola mundo'
      this.service.fetchPropertyByName(name).subscribe((res) => {
        this.allProperties = res as Property[];
        console.log(res);
      });
    });
  }
}
