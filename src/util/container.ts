// container.ts
import { CreateCustomerUseCase } from '../customers/application/use-case/create-customer.use-case';
import { CreateCustomerPort } from '../customers/infraestructure/port/in/create-customer.port';

let createCustomerUseCaseInstance: CreateCustomerPort | null = null;

export function getCreateCustomerPort(): CreateCustomerPort {
    if (!createCustomerUseCaseInstance) {
        createCustomerUseCaseInstance = CreateCustomerUseCase.getInstance();
    }
    return createCustomerUseCaseInstance;
}