import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Output() toggleEventEmitter = new EventEmitter<boolean>();

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleEventEmitter.emit(this.isOpen);
  }

}
