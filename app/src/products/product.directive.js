angular.module('app')
.directive('product', function(){
    return {
        template: '<h1>ffffffff</h1>',
        controller: function($scope, shopingCart){
            $scope.product = shopingCart.getProduct(id);
        }   
    }
});