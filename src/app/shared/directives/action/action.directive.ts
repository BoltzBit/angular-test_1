import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appAction]'
})
export class ActionDirective{
    @Output() appAction: EventEmitter<Event> = new EventEmitter<Event>();

    @HostListener('click', ['$event'])
    public handleClick(event: Event): void{
        this.appAction.emit(event);
    }

    @HostListener('keyup', ['$event'])
    public handleKeyUp(event: KeyboardEvent): void{
        this.appAction.emit(event);
    }
}