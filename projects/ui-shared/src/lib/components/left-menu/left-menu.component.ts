import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Output() toggleEventEmitter = new EventEmitter<boolean>();

  menuItems : any = [
    {
      label : 'Carte de credit 1',
      icon: 'home',
      url: '/translate'
    },

    {
      label : 'Carte de credit 2',
      icon: 'bookmark',
      url: '/button'
    }
  ];

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleEventEmitter.emit(this.isOpen);
  }

}
