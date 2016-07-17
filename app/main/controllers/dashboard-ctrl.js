'use strict';
angular.module('main')
.controller('DashboardCtrl', function ($scope, $log) {

  $scope.data = {
    list: [
      {label: 'M', selected: true, image: 'main/assets/images/biceps.gif'},
      {label: 'T', selected: false, image: 'main/assets/images/barbell-exercise.gif'},
      {label: 'W', selected: false, image: 'main/assets/images/3.gif'},
      {label: 'T', selected: false, image: 'main/assets/images/chest.gif'},
      {label: 'F', selected: false, image: 'main/assets/images/dumbbell-exercise.gif'},
      {label: 'S', selected: false, image: 'main/assets/images/biceps.gif'}
    ],
    selected: null
  };
  
  $scope.data.selected = $scope.data.list[0];
  $scope.onClick = function(s){
    if($scope.data.selected)
      $scope.data.selected.selected = false;
    s.selected = true;
    $scope.data.selected = s;
  };

  $log.log('Hello from your Controller: DashboardCtrl in module main:. This is your controller:', this);

});
