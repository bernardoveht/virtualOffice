export interface AmountInformationItem {
    icon:string;
    title:string;
    amount:number | string;
    type:'percentage' | 'money' | 'date' | 'text';
}


export interface AmountInformationTitle {
    icon:string;
    text:string;
}