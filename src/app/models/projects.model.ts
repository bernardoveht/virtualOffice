export interface Projects {
    id:                         number;
    dossierState:               number;
    name:                       string;
    description:                string;
    code:                       string;
    bapinCode:                  null;
    observations:               string;
    budgetaryProgramId:         null;
    workTypeGroupId:            number;
    workTypeSubGroupId:         number;
    workTypeId:                 number;
    costEstimationDate:         Date;
    developmentState:           number;
    interventionType:           number;
    locations:                  any[];
    scale:                      number;
    plans:                      any[];
    sourceOrganism:             null;
    organismInChargeId:         null;
    beneficiaryOrganismId:      null;
    beneficiaries:              null;
    costsNotSpecified:          boolean;
    goals:                      null;
    additionalLocationData:     null;
    isEmergency:                boolean;
    costCurrencyId:             number;
    totalCost:                  number;
    creatorUserId:              null;
    tematicAreaId:              number;
    tematicArea:                null;
    workflowStep:               number;
    workflowStepStatus:         number;
    directBeneficiaries:        null;
    directBeneficiariesType:    null;
    indirectBeneficiaries:      null;
    indirectBeneficiariesType:  null;
    potentialBeneficiaries:     null;
    potentialBeneficiariesType: null;
    directEmployments:          null;
    directEmploymentsType:      null;
    indirectEmployments:        null;
    indirectEmploymentsType:    null;
    potentialEmployments:       null;
    potentialEmploymentsType:   null;
    costs:                      any[];
    files:                      any[];
    portfolios:                 any[];
    creationDate:               Date;
    estimatedCostDate:          Date;
    term:                       null;
    managerUserId:              null;
    creatorUserFullName:        null;
    submitterId:                null;
    submitterFullName:          null;
    blockReason:                null;
    archiveReason:              null;
    gedoDocuments:              any[];
}