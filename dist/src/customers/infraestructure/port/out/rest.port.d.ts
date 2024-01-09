export interface RestPort {
    get<T>(entity: T): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(entity: T): Promise<any>;
    put<T>(entity: T): Promise<any>;
}
