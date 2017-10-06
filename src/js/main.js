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
	var rec_products = [
	{
		keyword: 'Hoodie',
		desc: 'hoodie',
		pid: 1,
		price: 29.99
	},
	{
		keyword: 'T-Shirt',
		desc: 't shirt'
		pid: 2,
		price: 19.99
	},
	{
		keyword: 'Pants',
		desc: 'pants',
		pid: 3,
		price: 24.99
	}
	];

}]);