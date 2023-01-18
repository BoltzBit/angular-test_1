import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-test_1';

    public photos$!: Observable<Photo[]> | null;
    
    constructor(private _photoService: PhotoBoardService){}

    ngOnInit(): void{
        this.photos$ = this._photoService.getPhotos();
    }
}
