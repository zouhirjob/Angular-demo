import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateExampleComponent } from './components/translate-example/translate-example.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';

const routes: Routes = [
  {
    path: '',
    component: UiButtonComponent
  },
  {
    path: 'button',
    component: UiButtonComponent
  },
  {
    path: 'translate',
    component: TranslateExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
