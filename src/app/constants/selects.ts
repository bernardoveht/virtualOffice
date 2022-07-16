import { IDropdownSettings } from "ng-multiselect-dropdown"

export const SelectSettings:IDropdownSettings = {
    idField: 'id',
    textField: 'name',
    enableCheckAll: false,
    searchPlaceholderText: 'Buscar',
    showSelectedItemsAtTop: true,
    allowSearchFilter: true,
    limitSelection: 1,
}

export const SelectSettingsMultiple:IDropdownSettings = {
    idField: 'id',
    textField: 'name',
    enableCheckAll: false,
    searchPlaceholderText: 'Buscar',
    showSelectedItemsAtTop: true,
    allowSearchFilter: true,
}