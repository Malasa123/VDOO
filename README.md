# VdooApp

This project have integration with spotify so you shold provide valid token in order to work.

## SelectComponent


Selector: vdo-select
Property Name | Description  | Default | Type
|--- | --- | --- | --- |
|items | The options of the dropdown | [] | Array<any>|
|label | Text to present for each item (generic purpose) | null | string |
|value | value of each option (generic purpose) | null | string |
|thumbnail | thumbnail of each option (generic purpose) | null | Function | string |
|trackBy | will detect change of inner list with the track by function (generic purpose) | (index , item) => |index | (item):string => string |
|backgroundColor | background color of the component (generic purpose) | '#fff' |  string  |
|openDirection | Which direction the component will open up to | 'bottom' |  'bottom'/'top'  |
|placeholder | Place holder for the component | null |  string  |
|selectedChange (event) | will fired when item selection is changed | --- |  ---  |





## SelectItemComponent

Selector: vdo-select-item
Property Name | Description  | Default | Type
--- | --- | --- | --- 
item | data of the option | null | any |
onSelect (event) | will fired when option is clicked | --- |  ---  |











### Using custom template

                <vdo-select 
                            [label]="'name'"
                            [value]="'id'"
                            [trackBy]="trackAlbumBy"
                            [thumbnail]="getThumbnail"
                            [(selected)]="selected"
                            placeholder="Select Bruno mars albums....">
                            //MY CUSTOM TEMPLATE
                    <vdo-select-item *ngFor="let album of albums"
                                    [item]="album">
                    <img class="custom-image" [src]="album.images[2].url" alt="">
                        <span class="select-dropdown-item-label" >
                        {{album.name}}
                    </span>  
                    </vdo-select-item>
                </vdo-select>


### Using only props(cleaner)

                <vdo-select 
                            [items]="albums"
                            [label]="'name'"
                            [value]="'id'"
                            [trackBy]="trackAlbumBy"
                            [thumbnail]="getThumbnail"
                            [(selected)]="selected"
                            placeholder="Select Bruno mars albums....">
                </vdo-select>