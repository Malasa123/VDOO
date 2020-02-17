import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { SelectComponent } from './select.component';

@Component({
  selector: 'vdo-select-item',
  template: `

    <div  (click)="selectItem()" >
        <div  *ngIf="!contentRef?.innerHTML?.trim()"
               [ngClass]="classes"> 
                  <img *ngIf="url" [src]="url" alt="">
                  <span class="select-dropdown-item-label" >{{itemLabel}}</span>  
        </div>
      <div #contentRef 
           [ngClass]="classes" >
           <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectItemComponent {
  @Input() item: any;
  @Output() onSelect = new EventEmitter<any>();


  // TODO:> remove any knowledge (parent injection) of child components from their parent component
  // and after that remove the counter from parent
  constructor(public parent: SelectComponent) {
  }

  ngOnInit(): void {
    //look at TODO
    this.parent.counter++;
  }

  get itemValue(): string | number | boolean {
    return this.parent.value ? this.item[this.parent.value] : this.item;
  }
  get itemLabel(): string {
    return this.parent.label ? this.item[this.parent.label] : this.item;
  }

  get isSelected(): boolean {
    if (!this.parent.selected) return false;
    return this.parent.value ? this.parent === this.parent.selected[this.parent.label] : this.item === this.parent.selected;
  }

  get classes() {
    let cssClasses = { 'select-dropdown-item': true };
    return { ...cssClasses, selected: this.isSelected };
  }

  get url(): string {
    let imageUrl: string = null;

    if (!this.parent.thumbnail) imageUrl;
    if (typeof this.parent.thumbnail === 'function')
      imageUrl = this.parent.thumbnail(this.item);
    if (typeof this.parent.thumbnail === 'string')
      imageUrl = this.item[this.parent.thumbnail];
    return imageUrl;
  }


  selectItem() {
    this.onSelect.emit(this.item);
    this.parent.select(this.item);
  }

  ngOnDestroy(): void {
    //look at TODO
    this.parent.counter--;
  }

}
