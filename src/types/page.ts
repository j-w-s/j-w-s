export interface Page<T> {
    data: T[];
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
}