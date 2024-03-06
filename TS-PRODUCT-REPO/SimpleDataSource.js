"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimlpeDataSource = void 0;
var Product_1 = require("./Product");
var SimlpeDataSource = /** @class */ (function () {
    function SimlpeDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "Samsung S6", "Telefon", 2000), new Product_1.Product(3, "Samsung S7", "Telefon", 3000), new Product_1.Product(4, "Samsung S8", "Telefon", 4000));
    }
    SimlpeDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimlpeDataSource;
}());
exports.SimlpeDataSource = SimlpeDataSource;
