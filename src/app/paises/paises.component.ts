import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Servicios
import { AgGridLoadingComponent } from '../shared/spinners/ag-grid_loading.component';
import { CustomTooltipComponent } from '../shared/custom-tooltip.component';
import { ErrorMessageService } from '../shared/error-message.service';
import { PaisesService } from '../shared/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  // Input data to component
  @Input() data: any;

  // Resultado
  paises: string[] = [];

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

  // HTTP headers
  httpHeaders = new HttpHeaders({
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c475e4fe16msh5376848a8ff2ae5p1576f5jsn7c4e1baf3a48',
    'content-type': 'application/json; charset=utf-8'
  });

  constructor(
    private errorMessageService: ErrorMessageService,
    private http: HttpClient,
    private paisesService: PaisesService
  ) {

    // Definir las columnas del AG-GRID
    this. columnDefs = [{
      headerName: 'Nombre',
      field: 'name'
    }, {
      headerName: 'Capital',
      field: 'capital'
    }, {
      headerName: 'ISO 2 code',
      field: 'alpha2code'
    }, {
      headerName: 'Región',
      field: 'region'
    }, {
      headerName: 'Sub-región',
      field: 'subregion'
    }];
    this.defaultColDef = {
      sortable: false,
      tooltipComponent: 'customTooltip'
    };
    this.frameworkComponents = {
      customLoadingOverlay: AgGridLoadingComponent,
      customTooltip: CustomTooltipComponent
    };
    this.loadingOverlayComponent = 'customLoadingOverlay';
    this.loadingOverlayComponentParams = { loadingMessage: 'Loading ...' };
  }

  ngOnInit() {

    console.log('*** REGIONES A BUSCAR:', this.data);
    this.data = {c: 'America'};
    console.log('*** REGIONES A BUSCAR:', this.data);

  }

  // Ejecutar una vez inicializado el AG-GRID
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // Iniciar el spinner
    this.gridApi.showLoadingOverlay();

    // Obtener los datos
    this.paisesService.getAllPaises().subscribe(
      data => {
        console.log('*** PAISES:', data);
        this.rowData = data;
      }

    )
  }

}
