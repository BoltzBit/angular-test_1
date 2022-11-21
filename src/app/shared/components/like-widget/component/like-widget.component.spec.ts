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
        spyOn(instance.likesChange, 'emit');
        fixture.detectChanges();
        instance.like();
        expect(instance.likesChange.emit).toHaveBeenCalled();
    });
});