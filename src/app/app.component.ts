import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'PAISES';

  public regiones = {
    a: 'Asia',
    b: 'Europa'
  };

  ngOnInit() {
    console.log('*** APP REGIONES:', this.regiones);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('*** APP REGIONES:', this.regiones);
  }
}
