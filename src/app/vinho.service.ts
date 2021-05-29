import { Injectable } from '@angular/core';
import { Vinho } from './vinho';

@Injectable()
export class VinhoService {
  private vinhos: Vinho[] = new Array();

  constructor() { }

  obterVinhos(): Vinho[] {
    let vinho = new Vinho();
    vinho.id = 1;
    vinho.nome = "Casal Garcia";
    vinho.regiao = "Douro";
    vinho.cor = "Tinto";
    this.vinhos.push(vinho);

    vinho = new Vinho();
    vinho.id = 2;
    vinho.nome = "Casal Garcia";
    vinho.regiao = "Douro";
    vinho.cor = "Branco";
    this.vinhos.push(vinho);
    
    vinho = new Vinho();
    vinho.id = 3;
    vinho.nome = "Casal Garcia";
    vinho.regiao = "Douro";
    vinho.cor = "Rose";
    this.vinhos.push(vinho);
    
    return this.vinhos;
  }

  obterVinho(id: number): Vinho {
    let vinho = new Vinho();
    vinho.id = 1;
    vinho.nome = "Casal Garcia";
    vinho.regiao = "Douro";
    vinho.cor = "Tinto";
    
    return vinho;
  }

}
