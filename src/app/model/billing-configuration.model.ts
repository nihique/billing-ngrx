/* Config interfaces */

export interface IBillingConfiguration {
    globals: IGlobalConfiguration;
    tasks: Array<ITaskConfiguration>;
}

export interface IGlobalConfiguration {
    dateFormat: string;
    maxItemsPerPage: number;
    timeFormat: string;
}

export interface ITaskConfiguration {
    taskTypeId: TaskType;
    fields: Array<IFieldConfiguration>;
}

export interface IFieldConfiguration {
    key: string;
    type: string;
    label: string;
    defaultDataSourceId: DataSource;
    dateTimeHandling: DateTimeHandling;
    validators: Array<IValidator>;
    dataSourceComparers: Array<IComparer>;
    visibility: IVisibility;
}


/* Validators */

export interface ITypedObject {
    type: string;
}

export interface IValidator extends ITypedObject {
    errorMessage: string;
    alwaysValidate: boolean;
}

export interface IRequiredValidator extends IValidator {
}

export interface INumberRangeValidator extends IValidator {
    minValue?: number;
    maxValue?: number;
}

export interface IRegexValidator extends IValidator {
    regex: string;
}

export interface IDateRangeValidator extends IValidator {
    minDurationParts: IDurationParts;
    maxDurationParts: IDurationParts;
    minIsBefore: boolean;
    maxIsBefore: boolean;
}

export interface IDurationParts {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}


/* Comparers */

export interface IComparer extends ITypedObject {
}

export interface INumberRangeComparer extends IComparer {
    rangeType: RangeType;
    range?: number;
}

export interface IDateRangeComparer extends IComparer {
    durationParts: IDurationParts;
}


/* Visibility */

export interface IVisibility {
    defaultRule: boolean;
    fieldValueVisibilityRules: Array<IFieldValueVisibilityRule>;
}

export interface IFieldValueVisibilityRule {
    field: string;
    value: string;
    visible: boolean;
}



/* Enums */

export enum TaskType {
    Transport = 1,
}

export enum DataSource {
    Billing = 1,
    IDS = 2,
    ePCR = 3,
    ZirMed = 4
}

export enum DateTimeHandling
{
    None = 0,
    DateTime = 1,
    Date = 2,
    Time = 3,
}

export enum RangeType {
    Absolute = 1,
    Percentage = 2,
}
