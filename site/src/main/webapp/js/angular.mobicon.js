(function() {
	
	'use strict';
	
	/* set module */
	angular
		.module('Mobicon.BroadleafCommerce', []);
	
	/* get module */
	angular
		.module('Mobicon.BroadleafCommerce')
		.run(['$rootScope', 'MobiconUtils', run])
		.factory('MobiconUtils', ['$window', MobiconUtils]);
	
	/* define function */
	function run($rootScope, MobiconUtils) {
		$rootScope.isSmartDevice = MobiconUtils.isSmartDevice();
	}
	
	/* factory */
	function MobiconUtils($window) {
		
		function isSmartDevice(){
	      // Adapted from http://www.detectmobilebrowsers.com
	      var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
	      // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
	      return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
	    }
		
		return {
			isSmartDevice: isSmartDevice
		};
	}

})();