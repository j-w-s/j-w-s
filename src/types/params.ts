export interface Params {
    page?: number | string;
    pageSize?: number | string;
    sort?: string;
    search?: string;
    fields?: string;
    [key: string]: any;
}