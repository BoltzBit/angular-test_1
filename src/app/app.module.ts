import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListModule } from './components/photo-list/photo-list.module';
import { NestedSelectModule } from './shared/components/nested-select/nested-select.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NestedSelectModule,
        HttpClientModule,
        PhotoListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
