/// <reference path="../typings/knockout/knockout.d.ts" />
var Home = (function () {
    function Home(firstName, lastName) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
    return Home;
}());
ko.applyBindings(new Home("", ""));
//# sourceMappingURL=HomeViewModel.js.map