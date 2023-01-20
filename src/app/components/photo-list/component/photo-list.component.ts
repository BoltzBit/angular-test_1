import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Photo } from "src/app/shared/components/photo-board/interfaces/photo";
import { PhotoBoardService } from "src/app/shared/components/photo-board/services/photo-board.service";

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['photo-list.component.scss']
})
export class PhotoListComponent{
    public photos$!: Observable<Photo[]> | null;
    
    constructor(private _photoService: PhotoBoardService){}

    ngOnInit(): void{
        this.photos$ = this._photoService.getPhotos();
    }
}
