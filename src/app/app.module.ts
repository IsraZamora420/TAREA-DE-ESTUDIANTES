import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './ejemplos/miprimercomponente/miprimercomponente.component';
import { FormsModule } from '@angular/forms';
import { RegistrousuarioComponent } from './ejemplos/registrousuario/registrousuario.component';
import { AutenticacionComponent } from './ejemplos/autenticacion/autenticacion.component';
import { TablaDatosComponent } from './ejemplos/tabla-datos/tabla-datos.component';
import { EjemploNgTemplateComponent } from './ejemplos/ejemplo-ng-template/ejemplo-ng-template.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModuloPadreComponent } from './modulo-padre/modulo-padre.component';
import { HomeComponent } from './componentes/home/home.component';
import { BotonesTablaComponent } from './shared/botones-tabla/botones-tabla.component';
import { TablapersonasComponent } from './ejercicios/tablapersonas/tablapersonas.component';
import { BotondinamicoComponent } from './shared/botondinamico/botondinamico.component';
import { ModalpersonasComponent } from './ejercicios/tablapersonas/modalpersonas/modalpersonas.component';
import { TablaproductosComponent } from './ejercicios/tablaproductos/tablaproductos.component';
import { StockpipePipe } from './shared/pipes/stockpipe.pipe';
import { PersonaModule } from './modulos/persona/persona.module';
import { CreacionModule } from './modulos/producto/creacion/creacion.module';
import { EstudiantesComponent } from './modulos/nomina/componentes/subcomponentes/ingreso-estudiantes/ingreso-estudiantes.component';
import { CalificacionesComponent } from './modulos/nomina/componentes/subcomponentes/ingreso-calificaciones/ingreso-calificaciones.component';
import { RepresentantesComponent } from './modulos/nomina/componentes/subcomponentes/ingreso-representantes/ingreso-representantes.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    RegistrousuarioComponent,
    AutenticacionComponent,
    TablaDatosComponent,
    EjemploNgTemplateComponent,
    HeaderComponent,
    ModuloPadreComponent,
    HomeComponent,
    BotonesTablaComponent,
    TablapersonasComponent,
    BotondinamicoComponent,
    ModalpersonasComponent,
    TablaproductosComponent,
    StockpipePipe,
    EstudiantesComponent,
    RepresentantesComponent,
    CalificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonaModule,
    CreacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
