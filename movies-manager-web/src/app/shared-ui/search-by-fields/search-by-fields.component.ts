import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-by-fields',
  templateUrl: './search-by-fields.component.html',
  styleUrls: ['./search-by-fields.component.css']
})
export class SearchByFieldsComponent implements OnInit {
  line = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
