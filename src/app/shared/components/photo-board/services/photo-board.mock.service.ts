import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { buildPhotoList } from "src/app/shared/utils/build-photo-list";
import { Photo } from "../interfaces/photo";
import { PhotoBoardService } from "./photo-board.service";

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService{
    public override getPhotos(): Observable<Photo[]>{
        return of(buildPhotoList());
    }
}