import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { fakeTs } from '../fake-object';

@Component({
    selector: 'app-nested-select',
    templateUrl: './nested-select.component.html',
    styleUrls: ['./nested-select.component.scss']
})
export class NestedSelectComponent implements OnInit {
    public show: boolean = false;

    public mainArray: any[] = [];

    constructor(private _elementRef: ElementRef,
        private _renderer2: Renderer2) { }

    ngOnInit(): void {
        this.mainArray = fakeTs.filter(item => !item.parentId);

        console.log(this.mainArray)
    }

    public showDrop(): void {
        this.show = !this.show;
    }

    public findChildren(id: number, description: string): void {
        const divEl: HTMLElement = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        const liChild: Array<HTMLElement> = this._elementRef.nativeElement.querySelectorAll('.dropdown-item');

        liChild.forEach(item => {
            item.remove();
        });

        const filteredArray = fakeTs.filter(item => item.parentId === id);

        filteredArray.forEach((item, index) => {
            //o primeiro li tem que referenciar o dropdown anterior
            if (index === 0) {
                const li: HTMLElement = this._renderer2.createElement('li');

                li.addEventListener('click', () => {
                    this.returnToMainList();
                });

                li.innerText = description;
                this._renderer2.addClass(li, 'dropdown-item');

                divEl.appendChild(li);
            }

            const li: HTMLElement = this._renderer2.createElement('li');
            
            this._renderer2.setAttribute(li, 'id', item.id);

            li.innerText = item.description;

            this._renderer2.addClass(li, 'dropdown-item');

            divEl.appendChild(li);
        });
    }

    private returnToMainList(): void {
        const divEl: HTMLElement = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        const liChild: Array<HTMLElement> = this._elementRef.nativeElement.querySelectorAll('.dropdown-item');

        liChild.forEach(item => {
            item.remove();
        });

        this.mainArray.forEach((item, index) => {
            const li: HTMLElement = this._renderer2.createElement('li');

            li.addEventListener('click', () => {
                this.findChildren(item.id, item.description);
            })

            li.innerText = item.description;
            this._renderer2.addClass(li, 'dropdown-item');

            divEl.appendChild(li);
        });
    }

}
