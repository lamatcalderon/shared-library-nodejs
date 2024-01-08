import { RestPort } from "../../port/out/rest.port";

export class RestAxios implements RestPort {
    get<T>(entity: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    post<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
    put<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }    
}