import { ActionDirectiveModule } from './action.directive.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe('ActionDirective',
  () => {

    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ActionDirectiveTestComponent],
        imports: [ActionDirectiveModule]
      }).compileComponents();

      fixture = TestBed.createComponent(ActionDirectiveTestComponent);
      component = fixture.componentInstance;
    });

    it('(D) (@Output appAction) should emit event with payload when ENTER key is pressed', () => {
      const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
      const event = new KeyboardEvent('keyup', {key: 'Enter'});
      divEl.dispatchEvent(event);
      expect(component.hasEvent()).toBe(true);
    });

    it('(D) (@Output appAction) should emit event with payload when clicked', () => {
      const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
      const event = new Event('click');
      divEl.dispatchEvent(event);
      expect(component.hasEvent()).toBe(true);
    });

    // Exemplo: teste de dois eventos em um único teste.
    it('(D) (@Output appAction) should emit event with payload clicked or ENTER key pressed', () => {
      const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
      const clickEvent = new Event('click');
      const keyUpEvent = new KeyboardEvent('keyup', {key: 'Enter'});
      divEl.dispatchEvent(clickEvent);
      expect(component.hasEvent()).toBe(true);
      component.clearEvent();
      divEl.dispatchEvent(keyUpEvent);
      expect(component.hasEvent()).toBe(true);
    });
  });


@Component({
  template: `<div (appAction)="actionHandler($event)" class="dummy-component"></div>`
})
class ActionDirectiveTestComponent {

  // tslint:disable-next-line:variable-name
  private _event: Event = null;

  public actionHandler(event: Event): void {
    this._event = event;
  }

  public hasEvent(): boolean {
    return !!this._event;
  }

  public clearEvent(): void {
    this._event = null;
  }
}
