
angular.module("sportsStore")
    .constant('dataUrl','http://localhost:2403/products')
    .controller('sportsStoreCtrl',function($scope, $http, dataUrl){

        $scope.data = { };
        $scope.data.products = [];

        $http.get(dataUrl)
            .then(function(response){

                $scope.data.products = response['data'] ;

            }, function (error) {

                $scope.data.error = error;

            });

})