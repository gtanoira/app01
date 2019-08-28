import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';

// Servicios
import { AgGridLoadingComponent } from '../shared/spinners/ag-grid_loading.component';
import { CustomTooltipComponent } from '../shared/custom-tooltip.component';
import { ErrorMessageService } from '../shared/error-message.service';
import { numberFormatter } from '../shared/math-functions';
import { PaisesService } from '../shared/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  // Input Parameters
  @Input() regiones: {};

  // Definir variables del AG-GRID
  public  columnDefs;
  public  defaultColDef;
  public  frameworkComponents;
  private gridApi;
  private gridColumnApi;
  public  loadingOverlayComponent;
  public  loadingOverlayComponentParams;
  public  overlayLoadingTemplate;
  public  tablePaises = [];

  constructor(
    private errorMessageService: ErrorMessageService,
    private http: HttpClient,
    private paisesService: PaisesService
  ) {

    // Definir las columnas del AG-GRID
    this. columnDefs = [{
      headerName: 'Región',
      field: 'region',
      filter: 'agTextColumnFilter',
      minWidth: 98
    }, {
      headerName: 'Sub-región',
      field: 'subregion',
      minWidth: 172
    }, {
      headerName: 'Nombre',
      field: 'name',
      minWidth: 219
    }, {
      headerName: 'Capital',
      field: 'capital',
      minWidth: 150
    }, {
      headerName: 'ISO2',
      field: 'alpha2Code'
    }];
    this.defaultColDef = {
      resizable: true,
      sortable: true,
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
    console.log('*** PAISES regiones (antes):', this.regiones);
    this.regiones['c'] = 'America';
    console.log('*** PAISES regiones (despues):', this.regiones);
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
        this.gridApi.setRowData(data);
        // this.autoSizeAllColumns();
        this.gridApi.sizeColumnsToFit();
      }
    )
  }

  autoSizeAllColumns() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
}
