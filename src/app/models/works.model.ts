export interface Works {
    id:                             number;
    internalWorkCode:               string;
    gdeRecordNumber:                null;
    wasGDERecordNumberValidated:    boolean;
    budgetaryProgramId:             string;
    budgetItemId:                   null;
    budgetItemDescription:          null;
    projectId:                      number;
    planId:                         null;
    agreement:                      null;
    expectedEndDate:                Date;
    initialActDate:                 null;
    provitionalReceptionDate:       null;
    bidDate:                        null;
    contractSignDate:               null;
    name:                           string;
    description:                    string;
    workAccessibilityInformation:   null;
    technicalManagerUserId:         string;
    organismInChargeId:             null;
    ownerOrganismId:                null;
    step:                           number;
    state:                          number;
    workflowType:                   null;
    technicalCharacteristics:       null;
    workImpactInCoveragePercentage: null;
    updatedAmount:                  number;
    bidNumberPrefix:                null;
    bidNumber:                      null;
    observations:                   any[];
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
    archiveReason:                  number;
    archiveSubReason:               number;
    physicalCompleteness:           number;
    financialCompleteness:          number;
    unitOfMeasure:                  null;
    area:                           null;
    locations:                      any[];
    notCertifiedAmount:             number;
    amountInProcess:                number;
    amountReadyForPayment:          number;
    amountAccrued:                  number;
    amountPaid:                     number;
    totalCost:                      number;
    workTypeId:                     number;
    workTypeSubGroupId:             number;
    workTypeGroupId:                number;
    captudataId:                    null;
    responsibleManagingOrganisms:   any[];
    costs:                          any[];
    requiredFiles:                  any[];
    tags:                           any[];
}
