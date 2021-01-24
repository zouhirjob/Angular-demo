import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from './tooltip.directive';

@Component({
  template: `
  <div style="padding: 200px;max-width: 100px;">
        <div id="tooltip-top" em-tooltip="em-tootip on top" em-tooltip-placement="top">tootip on top</div><br>
        <div id="tooltip-right" em-tooltip="em-tootip on right" em-tooltip-placement="right">tootip on right</div><br>
        <div id="tooltip-left" em-tooltip="em-tootip on left" em-tooltip-placement="left">tootip on left</div><br>
        <div id="tooltip-bottom" em-tooltip="em-tootip on bottom" em-tooltip-placement="bottom">tootip on right</div><br><br>
      </div>`
})
class TestComponent { }

describe('TooltipDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, TooltipDirective ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  
  it('should create the test component using directive', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const testComponent = fixture.componentInstance;
    expect(testComponent).toBeTruthy();
  });


  it('should have 4 TooltipDirective', () => {
    const fixture = TestBed.createComponent(TestComponent);
    let des = fixture.debugElement.queryAll(By.directive(TooltipDirective));
    expect(des.length).toBe(4);
  });


  it('should diplay tooltip top of the element', () => {
    const fixture = TestBed.createComponent(TestComponent);
    let element= fixture.nativeElement.querySelector('#tooltip-top')

    let event = new Event('mouseenter');
    element.dispatchEvent(event);
    expect(element.querySelector('.em-tooltiptext-top')).toBeTruthy();
  });

  it('should diplay tooltip bottom of the element', () => {
    const fixture = TestBed.createComponent(TestComponent);
    let element= fixture.nativeElement.querySelector('#tooltip-bottom')

    let event = new Event('mouseenter');
    element.dispatchEvent(event);
    expect(element.querySelector('.em-tooltiptext-bottom')).toBeTruthy();
  });


  it('should diplay tooltip left of the element', () => {
    const fixture = TestBed.createComponent(TestComponent);
    let element= fixture.nativeElement.querySelector('#tooltip-left')

    let event = new Event('mouseenter');
    element.dispatchEvent(event);
    expect(element.querySelector('.em-tooltiptext-left')).toBeTruthy();
  });

  it('should diplay tooltip right of the element', () => {
    const fixture = TestBed.createComponent(TestComponent);
    let element= fixture.nativeElement.querySelector('#tooltip-right')

    let event = new Event('mouseenter');
    element.dispatchEvent(event);
    expect(element.querySelector('.em-tooltiptext-right')).toBeTruthy();
  });
  
});
