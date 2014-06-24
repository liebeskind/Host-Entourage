angular.module('general.controllers', [])

  .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.mainCtrl = {};
    $scope.leftButtonTap = function () {
      $ionicSideMenuDelegate.toggleLeft($scope.$childHead);
    }
  })

  .controller('AccountCtrl', function($scope, Hosted, Attended) {
    $scope.hosted = Hosted.all();
    $scope.attended = Attended.all();
  })