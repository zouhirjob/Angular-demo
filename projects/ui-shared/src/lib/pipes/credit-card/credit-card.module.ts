import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardPipe } from './credit-card.pipe';



@NgModule({
  declarations: [CreditCardPipe],
  imports: [
    CommonModule
  ]
})
export class CreditCardModule { }
