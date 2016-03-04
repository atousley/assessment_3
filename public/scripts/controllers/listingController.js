myApp.controller('ListingController', ['$scope', '$http', function($scope, $http) {

    //console.log('listing controller hooked up');

    $http.get('/power_list').then(function(response) {
        //console.log('response from get:', response)
        $scope.powers = response.data;
    });

    $scope.showHero = function() {
        var power = $scope.primary_power.power_name
        //console.log();
        $http.get('/hero/' + power).then(function(response) {
            $scope.heroes = response.data;
        });
    }

    $scope.delete = function(id) {
        console.log(id);
        $http.delete('/hero/' + id).then(function(response) {
            console.log(response.data);
        });
    }

}]);