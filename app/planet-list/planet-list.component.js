'use strict';

// Register `planetList` component, along with its associated controller and template
angular.
module('planetList').
component('planetList', {
  templateUrl: 'planet-list/planet-list.template.html',
  controller: ['$http', '$routeParams',
  function planetListController($http, $routeParams) {
    var url = 'http://swapi.co/api/planets/'
    var self = this;
    self.orderProp = 'index';


    self.changeOrder = function(x){
      self.orderProp = x;
      console.log("Hello")
    }

    // $hhtp call to get the data from the swapi API
    $http.get(url).then(function(response) {
      self.planets = response.data.results;
      return self.planets
    }).then(function(planets){
    // loop through the planets and parse the "population" string into an int (unless the text reads unknown)


      planets.forEach(function(data, i){
        if (self.planets[i].population !== "unknown"){
          self.planets[i].population = (parseInt(data.population))
        }
      });
        return self.planets
    }).then(function(planets){
    // loop through the planets and parse the "diameter" string into an int 
      planets.forEach(function(data, i){
          self.planets[i].diameter = (parseInt(data.diameter))
      });
        return self.planets
    }).then(function(planets){
    // loop through the planets and parse the "rotation_period" string into an int 
    planets.forEach(function(data, i){
        self.planets[i].rotation_period = (parseInt(data.rotation_period))
    });
      return self.planets
    }).then(function(planets){
    // loop through the planets and parse the "orbital_period" string into an int 
      planets.forEach(function(data, i){
          self.planets[i].orbital_period = (parseInt(data.orbital_period))
      });
        return self.planets
    }).then(function(planets){
    // loop through the planets and 'split()' the terrain string at every comma, which results in an array of terrain types being created. we can use "ng-repeat" in the HTML template to get each terrain type and display this information on a new line in the table
      planets.forEach(function(data, i){
          self.planets[i].terrain = data.terrain.split(',')
      });
        return self.planets
    }).then(function(planets){
    // loop through the planets and then loop through the array of planets films, then $http.get on each film url to reasign the self.planets film array to be the film.title instead of a URL 
      planets.forEach(function(data, i){
        data.films.forEach(function(film, n){
          $http.get(film)
          .success(function(data, status, headers, config) {
            self.planets[i].films[n] = data.title
          })

        })
      })
    })


// $http.get($routeParams.planetId.films[0]).then(function(response) {
//   console.log("do this worketh now?", $routeParams.planetId)
//   thing = response.data;
//   console.log(thing)
// });

}]
});

