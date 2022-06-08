export interface Projects {
    id:                         number;
    dossierState:               number;
    name:                       string;
    description:                string;
    code:                       null;
    bapinCode:                  string;
    observations:               string;
    budgetaryProgramId:         null;
    workTypeGroupId:            number;
    workTypeSubGroupId:         number;
    workTypeId:                 number;
    costEstimationDate:         Date;
    developmentState:           number;
    interventionType:           number;
    locations:                  Location[];
    scale:                      number;
    plans:                      number[];
    sourceOrganism:             string;
    organismInChargeId:         null;
    beneficiaryOrganismId:      string;
    beneficiaries:              null;
    costsNotSpecified:          boolean;
    goals:                      string;
    additionalLocationData:     null;
    isEmergency:                boolean;
    costCurrencyId:             number;
    totalCost:                  number;
    creatorUserId:              string;
    tematicAreaId:              null;
    tematicArea:                null;
    workflowStep:               number;
    workflowStepStatus:         number;
    directBeneficiaries:        number;
    directBeneficiariesType:    number;
    indirectBeneficiaries:      number;
    indirectBeneficiariesType:  number;
    potentialBeneficiaries:     null;
    potentialBeneficiariesType: null;
    directEmployments:          number;
    directEmploymentsType:      number;
    indirectEmployments:        number;
    indirectEmploymentsType:    number;
    potentialEmployments:       null;
    potentialEmploymentsType:   null;
    costs:                      Cost[];
    files:                      any[];
    portfolios:                 any[];
    creationDate:               Date;
    estimatedCostDate:          Date;
    term:                       null;
    managerUserId:              string;
    creatorUserFullName:        string;
    submitterId:                null;
    submitterFullName:          null;
    blockReason:                null;
    archiveReason:              null;
    gedoDocuments:              any[];
    
}

export interface Cost {
    id:                  number;
    cost:                number;
    financingSourceId:   number;
    financingSourceName: string;
    percentage:          number;
}

export interface Location {
    projectId:            number;
    provinceUniqueId:     string;
    province:             string;
    departmentUniqueId:   string;
    department:           string;
    localityUniqueId:     string;
    locality:             string;
    municipalityUniqueId: string;
    municipality:         string;
    latitude:             number;
    longitude:            number;
    coordinates:          null;
    markerType:           number;
    isNationalRoute:      null;
    routeCode:            null;
    initialKilometer:     null;
    finalKilometer:       null;
    segment:              null;
    section:              null;
    routeDirection:       null;
    geoJson:              string;
}


export interface ProjectsFilter{
    page:                     number;
    pageSize:                 number;
    orderBy:                  string;
    orderDescending:          boolean;
    id:                       string;
    bapinCode:                string;
    name:                     string;
    portfolioId:              null;
    provinces:                string[];
    departments:              any[];
    municipalities:           any[];
    localities:               any[];
    workTypeGroupId:          null;
    workTypeSubgroupId:       null;
    workTypeId:               null;
    workflowSteps:            number[];
    budgetaryProgramId:       string;
    tematicAreaId:            null;
    planIds:                  any[];
    tagValues:                any[];
    managerUserId:            string;
    organismInChargeId:       string;
    beneficiaryOrganismId:    string;
    externalCreditOrganisms:  any[];
    loanId:                   string;
    developmentState:         null;
    workflowStepStatuses:     any[];
    haveLocations:            boolean;
    isEmergency:              boolean;
    includeArchived:          boolean;
    lastUpdateFrom:           string;
    lastUpdateTo:             string;
    geoJsonLayerId:           string;
    geoJsonFeatureCollection: string;

}