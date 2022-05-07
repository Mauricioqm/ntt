import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit{

  paises : Pais[] = [];
  
  public page!: number;
  pages: number = 1;
  
  continentes: string[] = [
    '',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  query: string = '';
  region: string = '';
  
  constructor
  (
    private ps: PaisesService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.countries();
  }

  countries() {
    this.ps.getAll().subscribe(data => {
      this.paises = data;
      // console.log(this.paises);
    })
  }

}
