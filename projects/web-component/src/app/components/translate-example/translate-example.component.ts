import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-example',
  templateUrl: './translate-example.component.html',
  styleUrls: ['./translate-example.component.scss']
})
export class TranslateExampleComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}
