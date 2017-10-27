angular.module('app')
.directive('allProducts', function(){
    return {
        template: '<ul><li ng-repeat="product in products">Product: <a ui-sref="product/{{product.id}}">{{product.name}}</a></li></ul>',
        controller: function($scope, shopingCart){
            $scope.products = shopingCart.getAllProducts();
        }   
    }
});