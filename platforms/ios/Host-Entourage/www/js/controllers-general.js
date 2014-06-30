angular.module('general.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.mainCtrl = {};
  $scope.leftButtonTap = function () {
    $ionicSideMenuDelegate.toggleLeft($scope.$childHead);
  }
})