import axios, {type AxiosInstance, type AxiosRequestConfig } from 'axios';
import type {Page} from '../types/page';
import type {Body} from '../types/body';
import type {Params} from '../types/params';

export type QueryFilter = Record<string, any>;

export type QuerySort = string | string[];

class Canal {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        if (!baseURL) throw new Error('baseURL is required for Canal');

        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 30000,
        });

        this.client.interceptors.request.use(
            async (config) => {
                const token = typeof window !== 'undefined'
                    ? localStorage.getItem('auth_token')
                    : null;

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                console.error('canal request failed:', {
                    url: error.config?.url,
                    method: error.config?.method,
                    status: error.response?.status,
                    data: error.response?.data,
                });
                return Promise.reject(error);
            }
        );
    }

    async request<T>(
        endpoint: string,
        params?: Params,
        config?: AxiosRequestConfig
    ): Promise<Page<T>> {
        const response = await this.client.get<Body<Page<T>>>(
            endpoint,
            {
                params,
                ...config,
            }
        );

        return response.data.data;
    }

    async post<T, R = T>(endpoint: string, data: T): Promise<R> {
        const response = await this.client.post<Body<R>>(endpoint, data);
        return response.data.data;
    }

    async put<T, R = T>(endpoint: string, data: T): Promise<R> {
        const response = await this.client.put<Body<R>>(endpoint, data);
        return response.data.data;
    }

    async patch<T, R = T>(endpoint: string, data: Partial<T>): Promise<R> {
        const response = await this.client.patch<Body<R>>(endpoint, data);
        return response.data.data;
    }

    async delete<T = void>(endpoint: string): Promise<T> {
        const response = await this.client.delete<Body<T>>(endpoint);
        return response.data.data;
    }

    get axios() {
        return this.client;
    }
}

export class CanalQuery<T> {
    private params: Params = {
        page: 1,
        pageSize: 25,
    };

    constructor(
        private canal: Canal,
        private endpoint: string
    ) {}

    fields(fields: string) {
        this.params.fields = fields;
        return this;
    }

    where(filter: QueryFilter) {
        const { page, pageSize, sort, search, fields, ...customFilters } = filter;

        if (page !== undefined) this.params.page = page;
        if (pageSize !== undefined) this.params.pageSize = pageSize;
        if (sort !== undefined) this.params.sort = sort;
        if (search !== undefined) this.params.search = search;
        if (fields !== undefined && !this.params.fields) {
            this.params.fields = fields;
        }

        Object.assign(this.params, customFilters);

        return this;
    }

    filter(key: string, value: any) {
        this.params[key] = value;
        return this;
    }

    page(page: number | string) {
        this.params.page = page;
        return this;
    }

    pageSize(size: number | string) {
        this.params.pageSize = size;
        return this;
    }

    sort(sort: string | string[]) {
        this.params.sort = Array.isArray(sort) ? sort.join(',') : sort;
        return this;
    }

    search(query: string) {
        this.params.search = query;
        return this;
    }

    skip(n: number) {
        const size = Number(this.params.pageSize) || 25;
        this.params.page = Math.floor(n / size) + 1;
        return this;
    }

    take(n: number) {
        this.params.pageSize = n;
        return this;
    }

    async all(): Promise<Page<T>> {
        return this.canal.request<T>(this.endpoint, this.params);
    }

    async first(): Promise<T | undefined> {
        const result = await this.page(1).pageSize(1).all();
        return result.data[0];
    }

    async count(): Promise<number> {
        const result = await this.pageSize(1).all();
        return result.totalCount;
    }

    async data(): Promise<T[]> {
        const result = await this.all();
        return result.data;
    }

    poll(
        intervalMs: number,
        callback: (data: Page<T>) => void,
        options?: {
            immediate?: boolean;
            maxPolls?: number;
            stopWhen?: (data: Page<T>) => boolean;
        }
    ): () => void {
        let pollCount = 0;
        let timeoutId: number;
        let stopped = false;

        const execute = async () => {
            if (stopped) return;

            try {
                const result = await this.all();
                pollCount++;

                callback(result);

                if (options?.maxPolls && pollCount >= options.maxPolls) {
                    stopped = true;
                    return;
                }

                if (options?.stopWhen?.(result)) {
                    stopped = true;
                    return;
                }

                if (!stopped) {
                    timeoutId = setTimeout(execute, intervalMs);
                }
            } catch (error) {
                console.error('polling error:', error);
                if (!stopped) {
                    timeoutId = setTimeout(execute, intervalMs);
                }
            }
        };

        if (options?.immediate) {
            execute();
        } else {
            timeoutId = setTimeout(execute, intervalMs);
        }

        return () => {
            stopped = true;
            if (timeoutId) clearTimeout(timeoutId);
        };
    }
}

export default Canal;