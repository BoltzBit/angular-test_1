import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';
import { NestedSelectModule } from './shared/components/nested-select/nested-select.module';
import { PhotoBoardModule } from './shared/components/photo-board/photo-board.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LikeWidgetModule,
        PhotoFrameModule,
        NestedSelectModule,
        HttpClientModule,
        PhotoBoardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
