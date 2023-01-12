import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetModule } from "../like-widget.module";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent>;
    let instance: LikeWidgetComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();
        
        //dentro do fixture tem a instância do meu componente
        fixture = TestBed.createComponent(LikeWidgetComponent);
        instance = fixture.componentInstance;
    });
    
    it('Should create component', () => {
        //instancia do meu componente
        expect(instance).toBeTruthy();
    });

    it('Should auto generate ID during ngOnInit when (@Input id) property is not assigned', () => {
        fixture.detectChanges();
        expect(instance.id).toBeTruthy();
    });

    it('Should not generate ID during ngOnInit when (@Input Id) property is assigned', () => {
        const someId = 'someId';
        instance.id = someId;
        
        fixture.detectChanges();
        
        expect(instance.id).toBe(someId);
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        //forma desnecessária
        // instance.likesChange.subscribe(() => {
        //     expect(true).toBeTrue();
        //     done();
        // });
        // instance.like();

        //forma enxuta
        spyOn(instance.liked, 'emit');
        fixture.detectChanges();
        instance.like();
        expect(instance.liked.emit).toHaveBeenCalled();
    });

    it(`(D) Should display number of likes when clicked`, done => {
        fixture.detectChanges();

        instance.liked.subscribe(() => {
            instance.likes++;

            fixture.detectChanges();

            const countEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
            
            expect(countEl.textContent?.trim()).toBe('1');

            done();
        });

        const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
        
        likeWidgetContainerEl.click();
    });

    it(`(D) Should display number of likes when ENTER key is pressed`, done => {
        fixture.detectChanges();

        instance.liked.subscribe(() => {
            instance.likes++;

            fixture.detectChanges();

            const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

            expect(counterEl.textContent?.trim()).toBe('1');

            done();
        });

        const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
        
        const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'Enter'});

        //eh necessario passar um evento para o dispatch
        likeWidgetContainerEl.dispatchEvent(event);
    });
});