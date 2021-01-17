import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LeftMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ], 
  exports: [LeftMenuComponent]
})
export class LeftMenuModule { }
