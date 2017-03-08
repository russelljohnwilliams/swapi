'use strict';

angular.
  module('planetApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/planets', {
          template: '<planet-list></planet-list>'
        }).
        when('/planets/:planetsId', {
          template: '<planets-detail></planets-detail>'
        }).
        otherwise('/planets');
    }
  ]);