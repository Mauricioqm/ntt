import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  pais : any;
  name: any;

  constructor
  (
    private ac: ActivatedRoute,
    private ps: PaisesService 
  )
  {
    this.name = this.ac.snapshot.paramMap.get('name');
    ps.getByName(this.name).subscribe(data => {
      this.pais = data[0];   
      console.log(this.pais); 
    })
  }

  ngOnInit(): void {
  }

}
