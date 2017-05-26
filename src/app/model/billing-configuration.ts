export interface IBillingConfiguration {
    globals: IGlobalConfiguration;
}

export interface IGlobalConfiguration {
    dateFormat: string;
    maxItemsPerPage: number;
    timeFormat: string;
}
