import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Isolamentomodel } from './isolamentomodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsolamentoService {

  constructor( private httpClient:HttpClient) { }


  public servicais():Observable<Isolamentomodel[]>{
    return this.httpClient.get<Isolamentomodel[]>("https://it3qwe.firebaseio.com/profissionais.json");
  }
}
