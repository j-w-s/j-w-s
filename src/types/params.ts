/**
 * const params: Params = {
 *   page: 1,
 *   pageSize: 25,
 *   sort: '-createdAt',
 *   search: 'john',
 *   fields: 'id,name,email',
 *   status: 'active',
 *   role: 'admin'
 * };
 */
export interface Params {
    page?: number | string;
    pageSize?: number | string;
    sort?: string;
    search?: string;
    fields?: string;
    [key: string]: any;
}