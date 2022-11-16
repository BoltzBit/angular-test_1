import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetModule } from "../like-widget.module";
import { LikeWidgetComponent } from "./like-widget.component";

let fixture: ComponentFixture<LikeWidgetComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [LikeWidgetModule]
    }).compileComponents();
    
    //dentro do fixture tem a instância do meu componente
    fixture = TestBed.createComponent(LikeWidgetComponent);
});

describe(LikeWidgetComponent.name, () => {
    it('Should create component', () => {
        //instancia do meu componente
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    });

    it('Should auto generate ID when id input property is missing', () => {
        const instance = fixture.componentInstance;

        expect(instance.id).toBeTruthy();
    });
});