'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    $scope.FetchModel('/user/' + userId, function(data) {
        $scope.$apply(function() {
            $scope.detail = {};
            $scope.detail.users = data;
            $scope.detail.firstName = data.first_name;
            $scope.detail.lastName = data.last_name;
            $scope.detail.initials = $scope.detail.firstName.substring(0,1) + $scope.detail.lastName.substring(0,1);
            $scope.detail.occupation = data.occupation;
            $scope.detail.location = data.location;
            $scope.detail.id = data._id;
            $scope.main.nameShown = $scope.detail.firstName + ' ' + $scope.detail.lastName;
        });
    });
}]);





