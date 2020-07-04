import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ServicosComponent } from './serviços/servicos/servicos.component';
import { DetallhesComponent } from './detallhes/detallhes.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LitaservicosComponent } from './litaservicos/litaservicos.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicosComponent,
    DetallhesComponent,
    MenuPageComponent,
    LitaservicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
