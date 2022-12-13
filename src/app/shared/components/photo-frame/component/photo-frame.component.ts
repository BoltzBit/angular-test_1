import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent{
    @Output() liked: EventEmitter<void> = new EventEmitter<void>();
    @Input() description: string = '';
    @Input() src: string = '';
    @Input() likes: number = 0;

    public like(): void{
        this.liked.emit();
    }
}