var app = angular.module("FontAwesomeSearch", ["ui.bootstrap", "colorpicker.module"]);

app.controller("IconsSearchController", function($scope, $http) {	

 	var vm = $scope.vm = this;

 	vm.collection = [];

 	vm.foreground = {
 		color: '#333333'
 	}
 	
 	vm.background = {
 		color: '#ffffff'
 	} 	

 	vm.onSelect = function(item, model, label) {
 		vm.collection.push(item); 		
 	}

 	vm.reset = function(){
 		with(vm) {
 			collection = [];
 			foreground.color = '#333333';
 			background.color = '#ffffff';
 			selected = '';
 		}
 	}

	$http({
	  method: 'GET',
	  url: 'js/fa.json'
	}).then(function successk(response) {
		vm.icons = response.data.icons;
	});

});