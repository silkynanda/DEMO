/// <reference path="../typings/knockout/knockout.d.ts" />

class Home
{
    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>
    fullName: KnockoutComputed<string>
    constructor(firstName: string, lastName: string)
    {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
}
ko.applyBindings(new Home("", ""));

