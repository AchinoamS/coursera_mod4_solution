(function() {
   'use strict';

   angular.module('MenuApp')
    .component('categoriesListComponent',{
      templateUrl: 'templates/categoriesList.html',
      bindings: {
        categoriesList: '<'
      }
    });
 })();
