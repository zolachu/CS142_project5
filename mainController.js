'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.appName = 'ZB';
        $scope.main.name = 'here';
        $scope.main.myName = 'Zolboo Chuluunbaatar';

        $scope.main.search = '';
        $scope.main.text = 'hello';
//        $scope.submit = function() {
//            if ($scope.main.text) {
//                $scope.main.search = $scope.main.text;
//            }
//        };

        $scope.checkbox;
        $scope.main.nameShown = '';
        $scope.FetchModel = function(url, doneCallback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                        var data = JSON.parse(xhr.responseText);
                        if (doneCallback) doneCallback(data);
                }
            }
            xhr.open('GET', url);
            xhr.send();
        }
        $scope.FetchModel('/test/info', function(data) {
            $scope.$apply(function() {
                $scope.main.verNum = data.__v;
                $scope.main.verInfo = 'Version ' + $scope.main.verNum;

            });
        });
        $scope.users = 'Users';
    }]);


