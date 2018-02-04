

    /*
        This component will be shared through all components in the application.
        In the case, we would make another directory which separate the components which have another aspect(concern) from other components
        The component can be called "Service Component" (= in angular 4 , it is just Service Class)
     */

angular.module('cart',[])   //First argument is the name of the module you want to create
                            // Second argument is for dependency
    .factory('cart',function () {       //Creating singleton service object
                                        //Every components in the app will use the CartService Object
        //Module.factory( [ serviceName ], [ factoryFunction() ])
        var cartData = [];

        return {
            addProduct : function (id,name,price) {     //add product to the cart
                var addedToExistingItem = false;

                for(var i=0; i< cartData.length; i++){
                    if(cartData[i].id == id){
                        cartData[i].count++;            //if the same product id exists in the cart, add count by 1
                        addedToExistingItem = true;
                        break;
                    }
                }

                if(!addedToExistingItem){
                    cartData.push({
                        count : 1, id : id, price : price, name: name
                    });
                }
            },

            removeProduct:function(id){             // remove the product from the cart
                for(var i=0; i< cartData.length ; i++){
                    if(cartData[i].id == id){
                        cartData.splice(i,1);       //splice will delete from the index (first argument) to the number of element(second argument)
                                                    //Array.splice(start, deleteCount)
                    }
                }
            },

            getProducts:function () {
                return cartData;
            }
        }
    })
    .directive('cartSummary',function (cart) {
        // directive( [ directiveName ] , [ factoryFunction() ] )
        return {
            restrict : 'E', // specify what kind of type will adjust directive to. 'E' is Element(Html Element), 'EA' is Element and Html Attribute
            templateUrl : '/angularjs/components/carts/cartSummary.html',
            controller: function ($scope) {

                var cartData = cart.getProducts();

                $scope.total = function () {
                    var total = 0;
                    for(var i=0; i< cartData.length; i++){
                        total += (cartData[i].price * cartData[i].count); // price * count(amount) is the total price of one product
                    }
                    return total;
                }

                $scope.itemCount = function () {
                    var total = 0;
                    for( var i=0; i< cartData.length ; i++){
                        total += cartData[i].count;
                    }

                    return total;
                }
            }
        }
    })


























