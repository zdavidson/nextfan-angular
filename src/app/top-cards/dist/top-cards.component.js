"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopCardsComponent = void 0;
var core_1 = require("@angular/core");
var TopCardsComponent = /** @class */ (function () {
    function TopCardsComponent(apiService) {
        this.apiService = apiService;
        this.allItems = {};
    }
    TopCardsComponent.prototype.ngOnInit = function () { };
    TopCardsComponent.prototype.ngAfterContentInit = function (childItems) {
        this.apiService.getCards().subscribe({
            next: function (items) {
                console.log('Current items', items);
                var listOfItems = new Array();
                items.map(function (item) {
                    listOfItems.push(item);
                });
                childItems = listOfItems;
                console.log(listOfItems);
                console.log(childItems);
            },
            error: function (msg) {
                console.log('Error', msg);
            }
        });
        this.allItems = childItems;
        console.log(this.allItems);
    };
    TopCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-top-cards',
            templateUrl: './top-cards.component.html',
            styleUrls: ['./top-cards.component.css']
        })
    ], TopCardsComponent);
    return TopCardsComponent;
}());
exports.TopCardsComponent = TopCardsComponent;
