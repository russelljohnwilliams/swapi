'use strict';

// Register `planetList` component, along with its associated controller and template
angular.
module('planetList').
component('planetList', {
  templateUrl: 'planet-list/planet-list.template.html',
  controller: ['$http', '$routeParams',
  function planetListController($http, $routeParams) {
    var self = this;
    self.orderProp = 'index';

    self.changeOrder = function(x){
      self.orderProp = x;
      console.log("Hello")
    }

    $http.get('http://swapi.co/api/planets/').then(function(response) {
      self.planets = response.data.results;
      // console.log(self.planets)
    });


    // $http.get($routeParams.planetId.films[0]).then(function(response) {
    //   console.log("do this worketh now?", $routeParams.planetId)
    //   thing = response.data;
    //   console.log(thing)
    // });

  }]
});
