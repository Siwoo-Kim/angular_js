

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
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }

                if(!addedToExistingItem){           // add only the product which cart doesn't contain
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