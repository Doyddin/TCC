import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Mesa } from '../model/Mesa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InserirService {
  URL= "http://localhost/kekw/inserir.php";
  constructor(
    private http: HttpClient,
    
    ) {}
    inserir(Mesa): Observable<any>{
      return this.http.post(this.URL, Mesa).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))
      )
    }
    exibirErro(erro){
      console.log("Erro ",erro);
      return null;
    }

}
