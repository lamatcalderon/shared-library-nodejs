export interface RestPort {
    get<T>(entity: T): Promise<T[]>;
    post<T>(entity: T): Promise<any>;
    delete<T>(entity: T): Promise<any>;
    put<T>(entity: T): Promise<any>;
}
