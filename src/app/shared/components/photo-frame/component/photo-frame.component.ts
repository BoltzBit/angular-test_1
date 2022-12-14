import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent{
    @Input() description: string = '';
    @Input() src: string = '';
    public likes: number = 0;
}