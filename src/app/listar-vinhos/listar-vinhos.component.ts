import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vinho } from '../vinho';
import { VinhoService } from '../vinho.service';

@Component({
  selector: 'app-listar-vinhos',
  templateUrl: './listar-vinhos.component.html',
  styleUrls: ['./listar-vinhos.component.css'],
  providers: [VinhoService]
})

export class ListarVinhosComponent implements OnInit {
  vinhos: Vinho[];

  constructor(
    private router: Router,
    private service: VinhoService) {
    this.vinhos = [];
  }

  ngOnInit() {
    this.vinhos = this.service.obterVinhos();
  }

  editarVinho(vinho: Vinho) {
    this.router.navigate(['/vinhos', vinho.id]);
  }

  novo() {
    this.router.navigate(['/vinhos/novo']);
  }
}
