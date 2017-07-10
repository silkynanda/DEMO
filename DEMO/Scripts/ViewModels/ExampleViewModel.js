/// <reference path="../typings/knockout/knockout.d.ts" />
function ExampleViewModel() {
    this.tickets = [
        { name: "Economy", price: 199.25 },
        { name: "Business", price: 499.34 },
        { name: "First Class", price: 1180.00 }
    ];
    this.chosenTicket = ko.observable();
    this.resetTicket = function () { this.chosenTicket(null); };
}
ko.applyBindings(new ExampleViewModel());
//# sourceMappingURL=ExampleViewModel.js.map