import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private session: SessionService
  ) {
    /* Agregamos los idiomas (mismo nombre que los archivos en i18n) */
    translate.addLangs(['es']);

    /* Cada vez que cambie el idioma habria que hacer lo siguiente */
    translate.setDefaultLang('es');
  }
}
