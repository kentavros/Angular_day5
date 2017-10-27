function productController($scope, shopingCart){
    $scope.getItems = function(){
        return shopingCart.getItems();
    }
}