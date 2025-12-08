export interface Body<T> {
    data: T;
    success: boolean;
    message?: string;
    errors?: string[];
}