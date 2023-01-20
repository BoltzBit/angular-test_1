import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NestedSelectModule } from './shared/components/nested-select/nested-select.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NestedSelectModule,
        HttpClientModule,
        RouterOutlet
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
