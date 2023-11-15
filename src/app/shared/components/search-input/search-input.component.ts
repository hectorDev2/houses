import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  name = new FormControl('');

  constructor(private router: Router) {}

  handleSearch(name: string) {
    this.router.navigate([`/search`, name]);
  }
}
