angular.module('app')
.config(function($stateProvider) {
    var productsState = {
      name: 'products',
      url: '/products',
      component: 'products'
    }
    $stateProvider.state(productsState);
  });