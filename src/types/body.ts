/**
 * const response: Body<User> = {
 *   data: { id: 1, name: 'John' },
 *   success: true,
 *   message: 'User retrieved successfully'
 * };
 * const error: Body<null> = {
 *   data: null,
 *   success: false,
 *   message: 'Validation failed',
 *   errors: ['Email is required', 'Password too short']
 * };
 */
export interface Body<T> {
    data: T;
    success: boolean;
    message?: string;
    errors?: string[];
}