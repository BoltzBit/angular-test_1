import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoFrameModule } from "../photo-frame.module";
import { PhotoFrameComponent } from "./photo-frame.component";

describe(PhotoFrameComponent.name, () => {
    let fixture: ComponentFixture<PhotoFrameComponent>;
    let component: PhotoFrameComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoFrameModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoFrameComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    })
});