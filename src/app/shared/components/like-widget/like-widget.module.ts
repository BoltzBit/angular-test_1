import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ActionDirectiveModule } from "../../directives/action/action.module";
import { UniqueIdService } from "../../service/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./component/like-widget.component";

@NgModule({
    declarations: [LikeWidgetComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ActionDirectiveModule
    ],
    exports: [LikeWidgetComponent],
    providers: [UniqueIdService]
})
export class LikeWidgetModule{ }
