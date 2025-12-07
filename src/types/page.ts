/**
 * const usersPage: Page<User> = {
 *   data: [
 *     { id: 1, name: 'Alice' },
 *     { id: 2, name: 'Bob' }
 *   ],
 *   page: 1,
 *   pageSize: 25,
 *   pageCount: 4,
 *   totalCount: 100
 * };
 */

export interface Page<T> {
    data: T[];
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
}