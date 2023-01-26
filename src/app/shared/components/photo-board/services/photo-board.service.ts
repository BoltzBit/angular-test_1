import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable, tap } from "rxjs";
import { Photo } from "../interfaces/photo";

@Injectable()
export class PhotoBoardService{
    constructor(private _http:HttpClient){}

    public getPhotos(): Observable<Photo[] | undefined>{
        return this._http.get<Photo[]>('http://localhost:3000/photos')
            .pipe(
                map(photos => {
                    return photos.map(photo => {
                        return {...photo, description: photo.description.toUpperCase()}
                    })
                }),
                tap(photos => console.log(photos))
            )
            .pipe(
                delay(2000)
            );
    }
}
