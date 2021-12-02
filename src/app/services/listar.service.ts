import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Mesa } from '../model/Mesa.model';

@Injectable({
  providedIn: 'root'
})
export class listarService {
URL = 'http://localhost/kekw/listar.php?mesa=';
  
  constructor(
    private http: HttpClient, 
  )     {}


    listar(id: Number): Observable<any> {
        return this.http.get<Mesa[]>(this.URL+id).pipe(
          map(retorno=>retorno),
        catchError(error=> this.exibirErro(error))
      );
    }
    exibirErro(erro){
      console.log("Erro ",erro);
      return null;
    }
  }


