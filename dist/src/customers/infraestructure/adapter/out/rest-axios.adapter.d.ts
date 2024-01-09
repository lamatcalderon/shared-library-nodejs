import { RestPort } from "../../port/out/rest.port";
export declare class RestAxios implements RestPort {
    private static instance;
    private constructor();
    static getInstance(): RestAxios;
    get<T>(entity: T): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(entity: T): Promise<any>;
    put<T>(entity: T): Promise<any>;
}
