import { Customer } from "../../../../domain/customer.domain";
import { CreateCustomerPort } from "../../../port/in/create-customer.port";
import { getCreateCustomerPort } from "../../../../../util/container-use-case.util";

export const createCustomer = (customer: Customer) => {
    const createUserPort: CreateCustomerPort = getCreateCustomerPort();
    return createUserPort.createCustomer(customer);
}