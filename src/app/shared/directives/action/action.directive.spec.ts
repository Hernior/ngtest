import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    });

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER is pressed`, () => {
    const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTruthy();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTruthy();
  });

});


@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
