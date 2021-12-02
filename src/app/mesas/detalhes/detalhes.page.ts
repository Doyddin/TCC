import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Mesa } from 'src/app/model/Mesa.model';
import { listarService } from 'src/app/services/listar.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  id = 0;
  precoTotal: number;
  Mesa: Mesa = {
    preco: 1.0,
    nome: "",
    precototal : 0,
    quantidade: 0
  }
  listaProduto: Observable<Mesa[]>;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private listarService: listarService
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params["id"];
    this.precoTotal= 0;
    this.listaProduto = this.listarService.listar(this.id).pipe(delay(1000));
    this.listaProduto.subscribe(
      produtos => {
        // console.log(produtos[0].preco)
        // console.log(produtos[0].quantidade)
        produtos.forEach((element) => {
          this.precoTotal = Number(this.precoTotal) + Number(element.preco);
          console.log(this.precoTotal);
        });
      }
      );



  }

}
