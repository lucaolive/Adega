import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarVinhosComponent } from './listar-vinhos/listar-vinhos.component';
import { EditarVinhoComponent } from './editar-vinho/editar-vinho.component';

const appRoutes: Routes = [
  {path: `vinhos`, component: ListarVinhosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListarVinhosComponent,
    EditarVinhoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
