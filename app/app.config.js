angular.module('app')
.config(function($stateProvider) {
    var productsState = {
      name: 'products',
      url: '/products',
      component: 'products'
    };
    var productState = {
      name: 'product',
      url: '/product/{{id}}',
      component: 'product'
    };
    // var backState = {
    //   name: 'back',
    //   url: '/',
    //   component: 'back'
    // }

    $stateProvider.state(productsState);
    $stateProvider.state(productState);
    // $stateProvider.state(backState);
  });