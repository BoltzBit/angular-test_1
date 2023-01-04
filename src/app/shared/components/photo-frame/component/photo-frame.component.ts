import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { debounceTime, Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy{
    @Output() liked: EventEmitter<void> = new EventEmitter<void>();
    @Input() description: string = '';
    @Input() src: string = '';
    @Input() likes: number = 0;

    private debounceSubject: Subject<void> = new Subject<void>();
    private unsubscribe: Subject<void> = new Subject<void>();

    public ngOnInit(): void {
        this.debounceSubject
            .asObservable()
            .pipe(debounceTime(200))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => this.liked.emit())
    }

    public ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    public like(): void{
        this.debounceSubject.next();
    }
}