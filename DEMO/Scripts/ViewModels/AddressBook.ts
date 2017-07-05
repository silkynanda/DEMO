/// <reference path="../typings/knockout/knockout.d.ts" />

function GameResult(opponent, result) {
    var self = this;
    self.opponent = ko.observable(opponent);
    self.result = ko.observable(result);
}

function ViewModel() {
    var self = this;

    self.resultChoices = ["Win", "Loss", "Tie"];

    self.gameResults = ko.observableArray([
        new GameResult("Brendan", self.resultChoices[0]),
        new GameResult("John", self.resultChoices[1]),
        new GameResult("Michelle", self.resultChoices[2])
    ]);
    self.addResult = function () {
        self.gameResults.push(new GameResult(self.opponent, self.resultChoices[0]));
    }
};

ko.applyBindings(new ViewModel);



