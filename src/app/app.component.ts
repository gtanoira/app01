import { Component, OnInit, AfterViewInit } from '@angular/core';

// Services
import { ErrorMessageService } from './shared/error-message.service';

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

  // Message Line
  msgErrorLine = '';

  constructor(
    private errorMessageService: ErrorMessageService
  ) {
    // Subscribirse a los mensajes de errores
    this.errorMessageService.formCurrentMessage.subscribe(
      data => this.msgErrorLine = data
    );
  }

  ngOnInit() {
    console.log('*** MAIN regiones:', this.regiones);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('*** MAIN regiones:', this.regiones);
  }
}
