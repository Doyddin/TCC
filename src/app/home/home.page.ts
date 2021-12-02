import { Component } from '@angular/core';
import { listarService } from '../services/listar.service';
import { delay } from 'rxjs/operators';
import { Mesa } from '../model/Mesa.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Mesa: Mesa = {
  //   preco: 1,
  //   nome: "",
  //   quantidade: 0
  // }
  listaProduto: Observable<Mesa[]>;
  
  constructor(
    private listarService: listarService) {
    //   this.listaProduto = this.listarService.listar().pipe(delay(1000));
  }

}

