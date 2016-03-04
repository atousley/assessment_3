myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {

    //console.log('hero controller hooked up');

    //start with a get for power list

    $http.get('/power_list').then(function(response) {
        //console.log('response from get:', response)
        $scope.powers = response.data;
    });

    //then post to db
    $scope.addHero = function() {

        var hero = {
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power.power_name
        };
        //console.log('heading to post', hero);
        $http.post('/hero', hero).then(function(response) {
            //console.log('posted this hero', response);
        });
    }

}]);
