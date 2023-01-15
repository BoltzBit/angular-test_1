import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';
import { NestedSelectModule } from './shared/components/nested-select/nested-select.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LikeWidgetModule,
        PhotoFrameModule,
        NestedSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
