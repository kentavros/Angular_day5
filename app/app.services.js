angular.module('app')
.factory('shopingCart', function(){
    var items = ['Book 1', 'Book 2', 'Book 3'];
    return{
        getItems: function(){
            return items;
        },
        getItemsCount: function(){
            return items.length;
        }
    };
})