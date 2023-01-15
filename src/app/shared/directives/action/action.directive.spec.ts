import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActionDirective } from "./action.directive";
import { ActionDirectiveModule } from "./action.module";

describe(ActionDirective.name, () => {
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

    it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new KeyboardEvent('keyup', {key: 'Enter'});

        divEl.dispatchEvent(event);

        expect(component.hasEvent()).toBe(true);
    });

    it(`(@Output appAction) should emit event with payload when clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new Event('click');

        divEl.dispatchEvent(event);

        expect(component.hasEvent()).toBe(true);
    });

    //Melhor nao fazer os dois ao mesmo tempo
    /*it(`(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        
        const clickEvent = new Event('click');
        divEl.dispatchEvent(clickEvent);
        expect(component.hasEvent()).withContext('Click event').toBe(true);
        component.clearEvent();
        const enterEvent = new KeyboardEvent('keyup', {key: 'Enter'});
        divEl.dispatchEvent(enterEvent);
        expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBe(true);
    });*/

    //ver mais sobre debugElement
    it('Calopsita cantou', () => {
        const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new Event('click');

        divEl.dispatchEvent(event);

        expect(component.hasEvent()).toBe(true);
    });
});

@Component({
    template: '<div class="dummy-component" (appAction)="actionHandler($event)"></div>'
})
class ActionDirectiveTestComponent{
    private event!: Event;

    public actionHandler(event: Event): void{
        this.event = event;
    }

    public hasEvent(): boolean{
        return !!this.event;
    }

    /*public clearEvent(): void{
        this.event = undefined;
    }*/
}
