import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {

  language = 0;
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.get('home.title').subscribe(Text =>{
      console.log(Text);
    })
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
