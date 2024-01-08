import { CreateCustomerPort } from "../../infraestructure/port/in/create-customer.port";
import { Customer } from "../../domain/customer.domain";

export class CreateCustomerUseCase implements CreateCustomerPort {

    private static instance: CreateCustomerUseCase;
    
    private constructor() {} 

    static getInstance(): CreateCustomerUseCase {
        if (!CreateCustomerUseCase.instance) {
            CreateCustomerUseCase.instance = new CreateCustomerUseCase();
        }
        return CreateCustomerUseCase.instance;
      }

    createCustomer(customer: Customer): Promise<Customer> {
        console.log("aqui debe pintar la implementacion");
        return;
    }
}