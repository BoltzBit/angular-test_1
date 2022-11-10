import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from 'src/app/shared/service/unique-id/unique-id.service';

@Component({
    selector: 'app-like-widget',
    templateUrl: './like-widget.component.html',
    styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {
    @Output() likesChange = new EventEmitter<number>();
    @Input() likes = 0;
    @Input() id = "";
    
    public fonts = { faThumbsUp };

    constructor(private uniqueIdService: UniqueIdService) { }

    ngOnInit(): void {
        if(!this.id){
            this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
        }
    }

    public like(): void{
        this.likes++;
        this.likesChange.emit(this.likes)
    }
}
