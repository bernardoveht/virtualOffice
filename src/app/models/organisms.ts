export interface Organisms {
    id:                      string;
    name:                    string;
    fullName:                string;
    email:                   null;
    governmentLevel:         number;
    directorUserId:          null;
    director:                null;
    representativeUserId:    null;
    representative:          null;
    provinceId:              string;
    province:                string;
    municipalityId:          string;
    municipality:            string;
    parentOrganismId:        null;
    links:                   any[];
    contactUsers:            any[];
    budgetaryPrograms:       any[];
    bankAccounts:            any[];
    primaryBankAccountId:    null;
    isActive:                boolean;
    address:                 null;
    postalCode:              null;
    phoneNumber:             null;
    safNumber:               null;
    safDenomination:         null;
    officialType:            null;
    nomenclature:            null;
    latitude:                number;
    longitude:               number;
    officialNotificationNin: null;
}

export interface OrganismsFilter{
    id:string;
}
