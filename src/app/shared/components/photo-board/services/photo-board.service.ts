import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { Photo } from "../interfaces/photo";

@Injectable()
export class PhotoBoardService{
    constructor(private _http:HttpClient){}

    public getPhotos(): Observable<Photo[] | undefined>{
        return this._http.get<Photo[]>('http://localhost:3000/photos')
            .pipe(
                delay(2000)
            );
    }
}
