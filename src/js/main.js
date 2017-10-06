$(document).ready(function() {
	$(".sl-carousel").slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false
	});
});

var ecom = angular.module('ecom', []);

ecom.controller('ecomCtrl', ['$scope', function($scope) {
	
	// In production rec_products will = [] and will be filled by an $http.get call to the host server
		var root_url = 'localhost/';

		$scope.rec_products = [
		{
			thumb_url: './data/images/hoodie.jpg',
			keyword: 'Hoodie',
			desc: 'hoodie',
			pid: 1,
			price: 29.99
		},
		{
			thumb_url: './data/images/tshirt.jpg',
			keyword: 'T-Shirt',
			desc: 't shirt',
			pid: 2,
			price: 19.99
		},
		{
			thumb_url: './data/images/pants.jpg',
			keyword: 'Pants',
			desc: 'pants',
			pid: 3,
			price: 24.99
		}
	];

}]);