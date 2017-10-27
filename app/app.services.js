angular.module('app')
.factory('shopingCart', function(){
    var items = ['Book 1', 'Book 2', 'Book 3'];
    var products = [
        {
            id: '1',
            name: 'Product1'
        },
        {
            id: '2',
            name: 'Product2'
        },
        {
            id: '3',
            name: 'Product3'
        },
        {
            id: '4',
            name: 'Product4'
        },
        {
            id: '5',
            name: 'Product5'
        },
    ]
    return{
        getItems: function(){
            return items;
        },
        getItemsCount: function(){
            return items.length;
        },
        getAllProducts: function(){
            return products; 
        },
        getProduct: function(index){
            return products[index].id;
        }
    };
})