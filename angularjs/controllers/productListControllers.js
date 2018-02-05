
angular.module('sportsStore')
    .constant('productLisgPageCount',3)
    .constant('productListActiveClass','btn-primary')
    .constant('productListClass','btn-secondary')
    .controller('productListCtrl',function (
        $scope, $filter, cart,//add the dependency of the cart service
        productListActiveClass,
        productListClass,
        productLisgPageCount
    ) {
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productLisgPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : productListClass;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : productListClass;
        }

        //expose the cart function to the view through scope
        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id,product.name,product.price);
        }
    })