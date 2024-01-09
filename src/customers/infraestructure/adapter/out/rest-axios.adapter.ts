import axios, { AxiosRequestConfig } from "axios";

import { RestPort } from "../../port/out/rest.port";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

export class RestAxios implements RestPort {

    private static instance: RestAxios;

    private constructor() { }

    static getInstance(): RestAxios {
        if (!RestAxios.instance) {
            RestAxios.instance = new RestAxios();
        }
        return RestAxios.instance;
    }

    get<T>(entity: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    post<T>(path: string, entity: T): Promise<T> {
        return instance.post(path, entity);
    }
    delete<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
    put<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
}