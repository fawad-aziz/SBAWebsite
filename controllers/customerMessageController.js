(function () {
	'use strict';
	angular.module('docApp')
	.controller('customerMessageController', customerMessageController);
	
	customerMessageController.$inject = [
		'docApp.services.sharedService'
	];
	
	function customerMessageController(sharedService) {
		var vm = this;
		var appHostUrl = "http://sbaapi.azurewebsites.net/";
		var customerMessageUrl = "api/customerMessages";
		vm.customerMessage = {};
		
		function init() {
			
		};
		
		vm.addMessage = function addMessage() {
			vm.customerMessage.name = vm.customerMessage.name;
			vm.customerMessage.email = vm.customerMessage.email;
			vm.customerMessage.contactNumber = vm.customerMessage.contactNumber;
			vm.customerMessage.subject = vm.customerMessage.subject;
			vm.customerMessage.message = vm.customerMessage.message;
			sharedService.callPostUrl(appHostUrl + customerMessageUrl, vm.customerMessage,
				function () {
					BootstrapDialog.show({
						title: 'Information',
						message: 'Your message has been logged.',
						buttons: [
							{
								label: 'OK',
								action: function(dialog) {
									dialog.close();
									location.href = '#/';
								}
							}
						]
					});
				},
				function () {
					BootstrapDialog.alert("Something went wrong, please try again.");
				}
			);
		};
		
		init();
	}
})();