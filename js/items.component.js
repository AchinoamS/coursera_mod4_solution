(function() {
   'use strict';

   angular.module('MenuApp')
    .component('itemsComponent',{
      templateUrl: 'templates/itemsList.html',
      bindings: {
        itemsList: '<'
      }
    });
 })();
