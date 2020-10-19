'use strict';

cs142App.controller('UserListController', ['$scope',
    function ($scope) {
        $scope.FetchModel('/user/list', function(data) {
            $scope.list = {};
            $scope.list.users = data;
            $scope.list.array = data.map((value) => value.first_name);
            console.log($scope.list.array);
            console.log(data[0].first_name);
            console.log(data[0]._id);
        });
       
        
 }]); 
    

