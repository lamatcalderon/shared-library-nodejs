'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sum(a, b) {
    return a + b;
}

var CreateCustomerUseCase = (function () {
    function CreateCustomerUseCase() {
    }
    CreateCustomerUseCase.getInstance = function () {
        if (!CreateCustomerUseCase.instance) {
            CreateCustomerUseCase.instance = new CreateCustomerUseCase();
        }
        return CreateCustomerUseCase.instance;
    };
    CreateCustomerUseCase.prototype.createCustomer = function (customer) {
        console.log("aqui debe pintar la implementacion");
        return;
    };
    return CreateCustomerUseCase;
}());

var createCustomerUseCaseInstance = null;
function getCreateCustomerPort() {
    if (!createCustomerUseCaseInstance) {
        createCustomerUseCaseInstance = CreateCustomerUseCase.getInstance();
    }
    return createCustomerUseCaseInstance;
}

exports.getCreateCustomerPort = getCreateCustomerPort;
exports.sum = sum;
//# sourceMappingURL=index.js.map
