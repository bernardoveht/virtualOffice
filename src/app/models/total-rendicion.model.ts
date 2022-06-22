export interface AmountInformationItem {
    icon:string;
    title:string;
    amount:number | string;
    type:'percentage' | 'money' | 'date';
}


export interface AmountInformationTitle {
    icon:string;
    text:string;
}