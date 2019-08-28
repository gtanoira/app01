import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
// Librerias externas
import { AgGridModule } from 'ag-grid-angular';

// Components
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';

// Directives
import { NegritaDirective } from './directives/negrita.directive';
import { OnlyNumbersDirective } from './directives/only_numbers.directive';

// Servicios
import { AgGridLoadingComponent } from './shared/spinners/ag-grid_loading.component';
import { CotizacionesService } from './shared/cotizaciones.service';
import { CustomTooltipComponent } from './shared/custom-tooltip.component';
import { ErrorMessageService } from './shared/error-message.service';
import { PaisesService } from './shared/paises.service';

@NgModule({
  declarations: [
    AppComponent,
    AgGridLoadingComponent,
    CotizacionesComponent,
    CustomTooltipComponent,
    NegritaDirective,
    OnlyNumbersDirective,
    PaisesComponent
  ],
  imports: [
    AgGridModule.withComponents([
      AgGridLoadingComponent,
      CustomTooltipComponent,
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    // Angular Material
    MatCardModule,
    MatToolbarModule
  ],
  providers: [
    CotizacionesService,
    ErrorMessageService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
