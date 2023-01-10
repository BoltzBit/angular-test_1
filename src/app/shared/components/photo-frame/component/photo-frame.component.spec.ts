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

        expect(times).toBe(2); 1
    }));

    it(`(D) Should display number of (@Input likes) when 'likes' is incremented`, () => {
        fixture.detectChanges();
        component.likes++;
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

        expect(element.textContent?.trim()).toBe('1');
    });

    //testando o atributo aria-label do dom
    it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
        fixture.detectChanges();
        component.likes++;
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement.querySelector('span');
        
        expect(element.getAttribute('aria-label')).toBe('1: people liked');
    });

    it(`(D) Should have aria-label with 0 (@Input likes)`, () => {
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement.querySelector('span');

        expect(element.getAttribute('aria-label')).toBe('0: people liked');
    });

    it(`(D) Should display image with src and description when bound to properties`, () => {
        const description = 'some description';
        const src = 'http://somedescription.com';
        component.description = description;
        component.src = src;

        fixture.detectChanges();

        const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
        
        expect(img.getAttribute('src')).toBe(src);
        expect(img.getAttribute('alt')).toBe(description);
    });
}); 