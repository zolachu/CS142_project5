'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    $scope.FetchModel('/user/' + userId, function(data) {
        $scope.$apply(function() {
            $scope.main.nameShown = 'Photos of ' + data.first_name + ' ' + data.last_name;
        });
    });

    $scope.FetchModel('/photosOfUser/' + userId, function(data) {
        $scope.$apply(function() {
            $scope.photos = {};
            $scope.photos.photoList = data;
            $scope.photos.clicked = 0;

            $scope.photos.next = $scope.photos.photoList.length - 1;
            $scope.photos.photo = $scope.photos.photoList[0];

            $scope.photos.clickedNext = function() {
                if ($scope.photos.clicked < $scope.photos.next) {
                    $scope.photos.clicked++;
                }
                $scope.photos.photo = $scope.photos.photoList[$scope.photos.clicked];
            }
            $scope.photos.clickedPrev = function() {
                if ($scope.photos.clicked > 0) {
                    $scope.photos.clicked--;
                } else {
                    $scope.photos.end = 'End of Photos';
                }
                $scope.photos.photo = $scope.photos.photoList[$scope.photos.clicked];
            }
            console.log($scope.photos.clicked);
        });
    });
}]);
