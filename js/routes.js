(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })

    // Categories list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesController as categories',
      resolve: {
        categoriesList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{ctegoryID}',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController as items',
      resolve: {
        itemsList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.ctegoryID)
        }]
      }
    });
  }



})();
