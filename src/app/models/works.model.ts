export interface WorksAllPaginator{
    result:Works[];
    totalCount:number;
}
export interface Works {
    id:                             number;
    internalWorkCode:               string;
    gdeRecordNumber:                null;
    wasGDERecordNumberValidated:    boolean;
    budgetaryProgramId:             null;
    budgetItemId:                   null;
    budgetItemDescription:          null;
    projectId:                      number;
    planId:                         null;
    agreement:                      Agreement;
    expectedEndDate:                Date;
    initialActDate:                 Date;
    provitionalReceptionDate:       Date;
    bidDate:                        null;
    contractSignDate:               null;
    name:                           string;
    description:                    string;
    workAccessibilityInformation:   null;
    technicalManagerUserId:         null;
    organismInChargeId:             string;
    ownerOrganismId:                string;
    step:                           number;
    state:                          number;
    workflowType:                   number;
    technicalCharacteristics:       null;
    workImpactInCoveragePercentage: null;
    updatedAmount:                  number;
    bidNumberPrefix:                null;
    bidNumber:                      null;
    observations:                   Observation[];
    technicalReferents:             any[];
    hasWorkSign:                    boolean;
    updatedWorkSign:                boolean;
    canBeVisited:                   boolean;
    workCertificates:               any[];
    comments:                       any[];
    redeterminations:               any[];
    inactivityRecords:              any[];
    creatorUserId:                  string;
    creatorUserFullName:            string;
    creationDate:                   Date;
    archived:                       boolean;
    archiveReason:                  null;
    archiveSubReason:               null;
    physicalCompleteness:           number;
    financialCompleteness:          number;
    unitOfMeasure:                  null;
    area:                           null;
    locations:                      Location[];
    notCertifiedAmount:             number;
    amountInProcess:                number;
    amountReadyForPayment:          number;
    amountAccrued:                  number;
    amountPaid:                     number;
    totalCost:                      null;
    workTypeId:                     number;
    workTypeSubGroupId:             number;
    workTypeGroupId:                number;
    captudataId:                    null;
    responsibleManagingOrganisms:   any[];
    costs:                          any[];
    requiredFiles:                  any[];
    tags:                           any[];
}

export interface Agreement {
    id:                         number;
    workId:                     number;
    type:                       number;
    organismId:                 null;
    awardedAmount:              number;
    officialBudget:             number;
    nationAmount:               number;
    term:                       number;
    certificationMode:          number;
    finantialAdvanceType:       number;
    finantialAdvancePercentage: null;
    comitentCounterparty:       null;
    fileId:                     null;
    gdeRecordNumber:            null;
    itemListId:                 null;
    managementMode:             number;
    expenseManagementEnabled:   boolean;
    varTableId:                 null;
    contractId:                 null;
    providers:                  any[];
    addendums:                  any[];
    termVariations:             any[];
}

export interface Location {
    id:                   number;
    provinceUniqueId:     string;
    provinceName:         string;
    departmentUniqueId:   string;
    departmentName:       string;
    localityUniqueId:     string;
    localityName:         string;
    municipalityUniqueId: string;
    municipalityName:     string;
    latitude:             number;
    longitude:            number;
}

export interface Observation {
    id:     number;
    date:   Date;
    detail: string;
}

export interface WorksFilter {
    page?:            number;
    pageSize?:        number;
    orderBy?:         string;
    orderDescending?: boolean;
    id?:              string;
    provinces?:       string[];
    departments?:     any[];
    municipalities?:  string[];
    beneficiaryOrganismId?:string;
}
