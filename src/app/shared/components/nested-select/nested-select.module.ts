import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NestedSelectComponent } from "./component/nested-select.component";

@NgModule({
    declarations: [NestedSelectComponent],
    imports: [CommonModule],
    exports: [NestedSelectComponent]
})
export class NestedSelectModule{}