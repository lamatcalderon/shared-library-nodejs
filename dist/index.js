'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

function sum(a, b) {
    return a + b;
}

var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());

var instance = axios__default["default"].create({
    baseURL: "http://localhost:8083",
});
instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    Promise.reject(err);
});
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    return Promise.reject(error);
});
var RestAxios = (function () {
    function RestAxios() {
    }
    RestAxios.getInstance = function () {
        if (!RestAxios.instance) {
            RestAxios.instance = new RestAxios();
        }
        return RestAxios.instance;
    };
    RestAxios.prototype.get = function (entity) {
        throw new Error("Method not implemented.");
    };
    RestAxios.prototype.post = function (path, entity) {
        return instance.post(path, entity);
    };
    RestAxios.prototype.delete = function (entity) {
        throw new Error("Method not implemented.");
    };
    RestAxios.prototype.put = function (entity) {
        throw new Error("Method not implemented.");
    };
    return RestAxios;
}());

var restAxiosInstance = null;
function getRestAxiosPort() {
    if (!restAxiosInstance) {
        restAxiosInstance = RestAxios.getInstance();
    }
    return restAxiosInstance;
}

var CreateCustomerUseCase = (function () {
    function CreateCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    CreateCustomerUseCase.getInstance = function () {
        if (!CreateCustomerUseCase.instance) {
            CreateCustomerUseCase.instance = new CreateCustomerUseCase();
        }
        return CreateCustomerUseCase.instance;
    };
    CreateCustomerUseCase.prototype.createCustomer = function (customer) {
        return this.restPort.post("/v1/customer", customer);
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

var createCustomer = function (customer) {
    var createUserPort = getCreateCustomerPort();
    return createUserPort.createCustomer(customer);
};

exports.Customer = Customer;
exports.createCustomer = createCustomer;
exports.sum = sum;
//# sourceMappingURL=index.js.map
