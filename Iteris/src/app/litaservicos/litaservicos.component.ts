import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Isolamentomodel } from 'src/app/service/servicos/isolamentomodel';

@Component({
  selector: 'app-litaservicos',
  templateUrl: './litaservicos.component.html',
  styleUrls: ['./litaservicos.component.css'],
})
export class LitaservicosComponent implements OnChanges {
  @Input() servico: Isolamentomodel;

  location: String;
  name: String;
  photo: String;
  services: String[];

  constructor() {}

  ngOnChanges(): void {
  if (this.servico != null){

    this.location=this.servico.location;
    this.name=this.servico.name;
    this.photo=this.servico.photo;
    this.services=this.servico.services;
  }
  }

}
