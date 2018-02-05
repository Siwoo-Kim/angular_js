

angular.module('sportsStore')
    .controller('cartSummaryController',function($scope,cart){
                                        // same with constructor injection in Angular4
        //cartService makes connection between different controllers
        $scope.cartData = cart.getProducts();
                // controller's(Components) field


        $scope.total = function(){
                // controller's method (property)
            var total = 0;
            for(var i=0; i < $scope.cartData.length; i++){
                total += ($scope.cartData[i].price * $scope.cartData[i].count); //find the total price
            }
            return total;
        }

        $scope.remove = function (id) {
            cart.removeProduct(id);
        }

    })