import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFrameModule } from "../photo-frame/photo-frame.module";
import { PhotoBoardComponent } from "./component/photo-board.component";

@NgModule({
    declarations: [PhotoBoardComponent],
    imports: [
        CommonModule,
        PhotoFrameModule
    ],
    exports: [PhotoBoardComponent]
})
export class PhotoBoardModule{}
