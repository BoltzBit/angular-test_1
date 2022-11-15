import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "src/app/shared/service/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

let fixture: ComponentFixture<LikeWidgetComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [LikeWidgetComponent],
        providers: [UniqueIdService],
        imports: [FontAwesomeModule]
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
});