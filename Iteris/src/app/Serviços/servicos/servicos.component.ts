import { Component, OnInit, Input } from '@angular/core';
import { Isolamentomodel } from 'src/app/service/servicos/isolamentomodel';
import {IsolamentoService} from 'src/app/service/servicos/isolamento.service';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  listaservicos:Isolamentomodel[];

   constructor(private isolamentoapi:IsolamentoService) {

    }

  ngOnInit(): void {
   this.isolamentoapi.servicais().subscribe((lista)=>{
     this.listaservicos =lista;
   })
  }

}
