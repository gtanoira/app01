import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

// Librerias externas
import { AgGridModule } from 'ag-grid-angular';

// Components
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';

// Directives
import { NegritaDirective } from './directives/negrita.directive';
import { OnlyNumbersDirective } from './directives/only_numbers.directive';

// Servicios
import { AgGridLoadingComponent } from './shared/spinners/ag-grid_loading.component';
import { CustomTooltipComponent } from './shared/custom-tooltip.component';
import { ErrorMessageService } from './shared/error-message.service';
import { PaisesService } from './shared/paises.service';

@NgModule({
  declarations: [
    AppComponent,
    AgGridLoadingComponent,
    CustomTooltipComponent,
    NegritaDirective,
    OnlyNumbersDirective,
    PaisesComponent
  ],
  imports: [
    AgGridModule.withComponents([AgGridLoadingComponent, CustomTooltipComponent]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [
    ErrorMessageService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
