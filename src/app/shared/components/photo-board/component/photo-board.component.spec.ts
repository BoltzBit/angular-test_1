import { SimpleChange, SimpleChanges } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { buildPhotoList } from "src/app/shared/utils/build-photo-list";
import { PhotoBoardModule } from "../photo-board.module";
import { PhotoBoardComponent } from "./photo-board.component";

describe(PhotoBoardComponent.name, () => {
    let fixture: ComponentFixture<PhotoBoardComponent>;
    let component: PhotoBoardComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardComponent);
        component = fixture.componentInstance;
    });

    it(`Should display rows and columns when (@Input photos) has value`, () => {
        component.photos = buildPhotoList();
        
        fixture.detectChanges();

        const change: SimpleChanges = {
            photos: new SimpleChange([], component.photos, true)
        };

        component.ngOnChanges(change);

        expect(component.rows.length)
            .withContext('Number of rows')
            .toBe(2);

        expect(component.rows[0].length)
            .withContext('Number of columns from the first row')
            .toBe(4);
        
        expect(component.rows[1].length)
            .withContext('Number of columns from the first row')
            .toBe(4);
    });
});