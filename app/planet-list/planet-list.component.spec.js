// 'use strict';

// describe('planetList', function() {

//   beforeEach(module('planetList'));

//   describe('planetListController', function() {
//     var $httpBackend, ctrl;


//     beforeEach(inject(function($componentController, _$httpBackend_) {
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('planets/planets.json')
//                   .respond.results([{name: 'Alderaan'}, {name: 'Hoth'}]);

//       ctrl = $componentController('planetList');
//     }));

//     it('should create a `planets` property with 2 planets fetched with `$http`', function() {
//       expect(ctrl.planets).toBeUndefined();

//       $httpBackend.flush();
//       expect(ctrl.planets).toEqual([{name: 'Alderaan'}, {name: 'Hoth'}]);
//     });

//     it('should set a default value for the `orderProp` property', function() {
//       expect(ctrl.orderProp).toBe('index');
//     });

//   });

// });

