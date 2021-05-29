import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VinhoService } from '../vinho.service';
import { Vinho } from '../vinho';

@Component({
  selector: 'app-editar-vinho',
  templateUrl: './editar-vinho.component.html',
  styleUrls: ['./editar-vinho.component.css'],
  providers: [VinhoService]
})
export class EditarVinhoComponent implements OnInit {

  @Input()
  vinho: Vinho = new Vinho();

  novo: boolean = false;

  constructor(
    private service: VinhoService,
    private route: ActivatedRoute,
    private router: Router){ }

  ngOnInit() {
    let id =+ this.route.snapshot.params[`id`];
    if(id) {
      this.vinho = this.service.obterVinho(id);
    } else {
      this.novo = true;
    }
  }

  salvar(vinho: Vinho) {
    this.router.navigate([`/vinhos`]);
  }

}
