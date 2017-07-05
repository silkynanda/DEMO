/// <reference path="../typings/knockout/knockout.d.ts" />

function AddRemoveViewModel() {
    var self = this;

    self.people = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);

    self.addPerson = function () {
        self.people.push({ name: "New at " + new Date() });
    };

    self.removePerson = function () {
        self.people.remove(this);
    }
}

ko.applyBindings(new AddRemoveViewModel());