import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'vdo-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    @Input() items: Array<any> = [];
    @Input() selected: any = null;
    @Input() placeholder: string;
    @Input() label: string = null;
    @Input() value: string = null;
    @Input() maxHeight: number | string  = 256;
    @Input() openDirection: 'bottom' | 'top' = 'bottom';
    @Input() backgroundColor: string = '#fff';
    @Input() thumbnail: (item: any) => string;
    @Input() trackBy: (item: any) => any;

    @Output() selectedChange = new EventEmitter<any>();


    open: boolean = false;
    private _tracker = (index: number, item: any) => index;

    ngOnInit(): void {
        if (this.selected) {
            this.select(this.selected)
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { selected } = changes;
          if (selected && !selected.currentValue) {
        }
    }

    get menuClasses() {
        let cssClasses = { 'select-dropdown-menu': true };
        return { ...cssClasses, [this.openDirection]: true };
    }

    get trackByFunction() {
        return this.trackBy || this._tracker;
    }

    get selectedLabel(): string {
        return this.label && this.selected ? this.selected[this.label] : this.selected;
    }
    get floating(): boolean {
        return this.open || Boolean(this.selected);
    }

    close() {
        this.open = false;
    }

    toggle() {
        this.open = !this.open
    }

    select(item: any) {
        this.selected = item;
        this.selectedChange.emit(item);
    }

    resetSelection() {
        this.select(null);
    }





}



