import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ServicosComponent } from './serviços/servicos/servicos.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { DetallhesComponent } from './detallhes/detallhes.component';


const routes: Routes = [
  {
    path: '',
    component: MenuPageComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'servicos',
        component: ServicosComponent,
      },
      {
        path: 'detallhes',
        component: DetallhesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
