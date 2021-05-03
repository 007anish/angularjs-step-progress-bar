import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
var myApp = window.app;
myApp.controller("myController", function($scope) {
  $scope.current_progress = 3; // set the current working progress
  $scope.steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $scope.activeQuestNode = function(index, max){
		if(index == max - 1) // - 1 to adjust the array index
			return "current_active";
		if(index < max - 1)
			return "active"
		return "";
	};
});
