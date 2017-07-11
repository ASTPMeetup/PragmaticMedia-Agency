var app = angular.module('app',[]);
var date = new Date();
var mainUrl = "https://openws.herokuapp.com/messages?apiKey=8fa0e46f0361117d65d91d6032391324";

$('#title').on('input', function(){
	$('#status').empty();
})

class postObject {
	constructor(name, business, email, message) {
		this.upload_time = Date.now();
		this.name = name;
		this.business = business;
		this.email = email;
		this.date = date.toLocaleDateString();
		this.message = message;
	}
}

app.controller('MediaGalleryCtrl', function($scope, $http){
	$scope.displayModal = false;

	$scope.toggleModal = function() {
		console.log($scope.displayModal);
		$scope.displayModal = true;
	}
});

app.controller('ContactFormCtrl', function($scope, $http){
	$scope.name = "";
  	$scope.business = "";
	$scope.email = "";
	$scope.message = "";
	$scope.messageSubmit = function(){
		var newObj = new postObject($scope.name, $scope.business, $scope.email, $scope.message);
    console.log(newObj);
		newObj = JSON.stringify(newObj);

		$scope.postNewObject(newObj);
	}

	$scope.postNewObject = function(newObj) {
    console.log(newObj);
		$http.post(mainUrl, newObj)
		.then(function success(response) {
		    console.log(response);
				$('#form')[0].reset();
				$('#status').html("Message Received.");

		  }, function error(response){
		    console.log(response);
				$('#status').text(" Something went wrong..Try again.");
		});
	}
});
