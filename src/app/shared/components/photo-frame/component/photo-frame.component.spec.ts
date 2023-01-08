import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
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
    });

    it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) 
        once when called multiple times within debounce time`, fakeAsync(() => {
            fixture.detectChanges();

            let times = 0;

            component.liked.subscribe(() => {
                times++;
            });

            component.like();
            component.like();
            
            tick(500);

            expect(times).toBe(1);
    }));

    it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) two times
        when called mulitple times within debounce time`, fakeAsync(() => {
            fixture.detectChanges();

            let times = 0;

            component.liked.subscribe(() => {
                times++;
            });

            component.like();
            tick(500);

            component.like();
            tick(500);

            expect(times).toBe(2);
        }));
}); 