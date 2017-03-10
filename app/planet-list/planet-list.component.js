
// 'use strict';

// var app = angular.
// module('planetList').
// component('planetList', {
//   templateUrl: 'planet-list/planet-list.template.html',
//   controller: ['$http',
//   function planetListController($http) {
//     var self = this;
    
//     self.orderProp = 'index';
//     self.url = null;
//     self.data = null;
//     self.currentPage = 1;
//     self.totalPages =  7 ;
//     self.gap = 3;
//     self.right_gap = 2;
//     self.left_gap = 1;
//     self.cached = 0;
//     self.hideDots = false;
//     self.hideNum = false;

//     self.loadData = function () {
//   // $hhtp call to get the data from the swapi API
//     $http.get(self.url).then(function(response) {
//       self.data = response.data
//       var planets = response.data.results;
//       // self.countPages()
//       return planets
//     }).then(function(planets){
      
//       // loop through the planets and then loop through the array of planets films, then $http.get on each film url to reasign the self.planets film array to be the film.title instead of a URL 
//       planets.forEach(function(data, i){
//         // if (self.planets[i].films.length !== 0){
//           data.films.forEach(function(film, n){
//             $http.get(film)
//             .success(function(data, status, headers, config) {
//               planets[i].films[n] = data.title
//             })
//           })
//           // this can be used to substitute a blank space in the "movie" column to address the fact the planet has not been featured in a movie, yet is still considered to be canon.
//         // } else {
//         //   self.planets[i].films = ["Not featured in a movie"]
//         // }
//       })
//       return planets
//     }).then(function(planets){
//       self.planets = planets
//       return self.planets
//     }).then(function(planets){

//     // loop through the planets and parse the "population" string into an int (unless the text reads unknown)
//       self.planets.forEach(function(data, i){
//         if (self.planets[i].population !== "unknown"){
//           self.planets[i].population = (parseInt(data.population))
//         }

//         // parse the "diameter" string into an int 
//         if (self.planets[i].diameter !== "unknown"){
//           self.planets[i].diameter = (parseInt(data.diameter))
//         }
        
//         // parse the "rotation_period" string into an int
//         if (self.planets[i].rotation_period !== "unknown"){
//           self.planets[i].rotation_period = (parseInt(data.rotation_period))  
//         }
        
//         // parse the "orbital_period" string into an int
//         if (self.planets[i].orbital_period !== "unknown"){
//           self.planets[i].orbital_period = (parseInt(data.orbital_period))
//         }
        
//         // 'split()' the terrain string at every comma, which results in an array of terrain types being created. we can use "ng-repeat" in the HTML template to get each terrain type and display this information on a new line in the table
//           self.planets[i].terrain = data.terrain.split(',')
//         });
//       })
//   }


//   self.changeOrder = function(x){
//     self.orderProp = x;
//   }

//   self.searchPlanets = function(){
//     self.setUrl()
//     self.url = (self.url + "?search=" + self.text)
//     self.loadData()
//   }

//   self.setUrl = function(){
//     self.url = 'http://swapi.co/api/planets/'
//   }
  
//   self.countPages = function(){
//     if (self.totalPages == null){
//       var count = self.data.count / self.planets.length
//       self.totalPages  = Math.ceil(count) 
//     }
//   }


//   // ==================== page navigation ====================

//   self.prevPage = function(){
//     if(self.currentPage > 1){
//       self.currentPage-=1;
//       self.navigate();
//     }
//   }

//   self.nextPage = function(){
//     if(self.currentPage < self.totalPages){
//       self.currentPage+=1;
//       self.navigate();
//      } 
//   }      
  
//   self.firstPage = function(){
//     self.currentPage = 1
//     self.navigate();
//   }

//   self.lastPage = function(){
//     self.currentPage = self.totalPages
//     self.navigate();
//   }    

//   self.navigate = function(){
//     self.setUrl();
//     self.url = (self.url + "?page=" + self.currentPage);
//     self.loadData();
//     self.changeClass()
//   }

//   self.changeClass = function(){
//     if (self.currentPage == self.totalPages){
//         self.hideDots = true;
//         self.hideNum = true;
//     }else if ( self.currentPage == self.totalPages -1){
//         self.hideDots = true;  
//     }else if(self.currentPage !== self.totalPages){
//         self.hideDots = false;
//         self.hideNum = false;
//     }
//   }



//   self.setUrl()
//   self.loadData()

//   }]
// });

















'use strict';

// Register `planetList` component, along with its associated controller and template
var app = angular.
module('planetList').
component('planetList', {
  templateUrl: 'planet-list/planet-list.template.html',
  controller: ['$http',
  function planetListController($http) {
    var self = this;
    
    self.orderProp = 'index';
    self.url = null;
    self.data = null;
    self.currentPage = 1;
    self.totalPages =  null ;
    self.gap = 3;
    self.right_gap = 2;
    self.left_gap = 1;
    self.cached = 0;
    self.hideDots = false;
    self.hideNum = false;

    self.loadData = function () {
  // $hhtp call to get the data from the swapi API
    $http.get(self.url).then(function(response) {
      self.data = response.data
      self.planets = response.data.results;
      self.countPages()
      return self.planets
    }).then(function(planets){

    // loop through the planets and parse the "population" string into an int (unless the text reads unknown)
      planets.forEach(function(data, i){
        if (self.planets[i].population !== "unknown"){
          self.planets[i].population = (parseInt(data.population))
        }

        // parse the "diameter" string into an int 
        if (self.planets[i].diameter !== "unknown"){
          self.planets[i].diameter = (parseInt(data.diameter))
        }
        
        // parse the "rotation_period" string into an int
        if (self.planets[i].rotation_period !== "unknown"){
          self.planets[i].rotation_period = (parseInt(data.rotation_period))  
        }
        
        // parse the "orbital_period" string into an int
        if (self.planets[i].orbital_period !== "unknown"){
          self.planets[i].orbital_period = (parseInt(data.orbital_period))
        }
        
        // 'split()' the terrain string at every comma, which results in an array of terrain types being created. we can use "ng-repeat" in the HTML template to get each terrain type and display this information on a new line in the table
          self.planets[i].terrain = data.terrain.split(',')
        });
        return self.planets
      }).then(function(planets){
      
      // loop through the planets and then loop through the array of planets films, then $http.get on each film url to reasign the self.planets film array to be the film.title instead of a URL 
      planets.forEach(function(data, i){
        // if (self.planets[i].films.length !== 0){
          data.films.forEach(function(film, n){
            $http.get(film)
            .success(function(data, status, headers, config) {
              self.planets[i].films[n] = data.title
              // self.planets[i].filmTitles = []
              // self.planets[i].filmTitles[n] = data.title 
            })
          })
          // this can be used to substitute a blank space in the "movie" column to address the fact the planet has not been featured in a movie, yet is still considered to be canon.
        // } else {
        //   self.planets[i].films = ["Not featured in a movie"]
        // }
      })
    })
  }


  self.changeOrder = function(x){
    self.orderProp = x;
  }

  self.searchPlanets = function(){
    self.setUrl()
    self.url = (self.url + "?search=" + self.text)
    self.loadData()
  }

  self.setUrl = function(){
    self.url = 'http://swapi.co/api/planets/'
  }
  
  self.countPages = function(){
    if (self.totalPages == null){
      var count = self.data.count / self.planets.length
      self.totalPages  = Math.ceil(count) 
    }
  }


  // ==================== page navigation ====================

  self.prevPage = function(){
    if(self.currentPage > 1){
      self.currentPage-=1;
      self.navigate();
    }
  }

  self.nextPage = function(){
    if(self.currentPage < self.totalPages){
      self.currentPage+=1;
      self.navigate();
     } 
  }      
  
  self.firstPage = function(){
    self.currentPage = 1
    self.navigate();
  }

  self.lastPage = function(){
    self.currentPage = self.totalPages
    self.navigate();
  }    

  self.navigate = function(){
    self.setUrl();
    self.url = (self.url + "?page=" + self.currentPage);
    self.loadData();
    self.changeClass()
  }

  self.changeClass = function(){
    if (self.currentPage == self.totalPages){
        self.hideDots = true;
        self.hideNum = true;
    }else if ( self.currentPage == self.totalPages -1){
        self.hideDots = true;  
    }else if(self.currentPage !== self.totalPages){
        self.hideDots = false;
        self.hideNum = false;
    }
  }




  self.setUrl()
  self.loadData()

  }]
});

