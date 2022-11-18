import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  language = 0;
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  onLanguage() {
    this.language = (this.language + 1) %2;
    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es')
        break
      case 1:
        this.translate.setDefaultLang('en')
        break
    }
  }
}
