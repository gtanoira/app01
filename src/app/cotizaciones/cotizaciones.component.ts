import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Servicios
import { AgGridLoadingComponent } from '../shared/spinners/ag-grid_loading.component';
import { CustomTooltipComponent } from '../shared/custom-tooltip.component';
import { ErrorMessageService } from '../shared/error-message.service';
import { CotizacionesService } from '../shared/cotizaciones.service';
import { cotizacionFormatter } from '../shared/math-functions';

// Modelos
interface PaisResumen {
  region: string;
  cantidad: number;
}

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent {

  cotizacionesABuscar = [
    { from: 'USD', to: 'ARS'},
    { from: 'EUR', to: 'ARS'},
    { from: 'USD', to: 'BRL'},
    { from: 'USD', to: 'CLP'},
    { from: 'USD', to: 'MXN'},
    { from: 'USD', to: 'UYU'},
    { from: 'USD', to: 'PEN'},
    { from: 'USD', to: 'COP'},
    // { from: 'USD', to: 'VES'},
    { from: 'EUR', to: 'USD'},
    { from: 'EUR', to: 'MXN'}
  ];

  // Definir variables del AG-GRID
  public  columnDefs;
  public  defaultColDef;
  public  frameworkComponents;
  private gridApi;
  private gridColumnApi;
  public  loadingOverlayComponent;
  public  loadingOverlayComponentParams;
  public  overlayLoadingTemplate;
  public  rowData = [];

  constructor(
    private errorMessageService: ErrorMessageService,
    private http: HttpClient,
    private cotizacionesService: CotizacionesService
  ) {

    // Definir las columnas del AG-GRID
    this. columnDefs = [{
      headerName: 'De',
      field: 'from',
      filter: 'agTextColumnFilter',
      sort: 'asc'
    }, {
      headerName: 'A',
      field: 'to',
      filter: 'agTextColumnFilter'
    }, {
      headerName: 'Cotización',
      field: 'rate',
      valueFormatter: cotizacionFormatter,
      cellStyle: { 'text-align': 'right' }
    }];
    this.defaultColDef = {
      sortable: true
    };
    this.frameworkComponents = {
      customLoadingOverlay: AgGridLoadingComponent
    };
    this.loadingOverlayComponent = 'customLoadingOverlay';
    this.loadingOverlayComponentParams = { loadingMessage: 'Loading ...' };
  }

  // Ejecutar una vez inicializado el AG-GRID
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // Iniciar el spinner
    this.gridApi.showLoadingOverlay();

    // Obtener los datos
    this.cotizacionesService.getTodayCurrencies(this.cotizacionesABuscar).subscribe(
      data => {
        console.log('** COTIZACIONES:', data);
        this.rowData = data;
        this.gridApi.sizeColumnsToFit();
      }

    )
  }

}
