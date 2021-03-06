// -------------------------------------------------------------------------------------------------
// OpenSeaMap Water Depth - Web frontend for depth data handling.
//
// Written in 2012 by Dominik Fässler dfa@bezono.org
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along
// with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
// -------------------------------------------------------------------------------------------------

OSeaM.utils.Validation = {
    username: function(value) {
        return OSeaM.utils.Validation.email(value);
    },
    email: function(value) {
        var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return reg.test(value);
    },
	configname: function(value) {
	// test for special characters
		var reg = /^[a-z A-Z0-9]+$/;
        return reg.test(value);
	
	},
		distanceY: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
			gauge: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
			distanceX: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
			slidingspeed: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
				idDepthMeasured: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
				idDepthDisplayed: function(value) {
	// test for decimal
		var reg = /^\d*\.?\d*$/;
        return reg.test(value);
	
	},
	confignames: function (value) {
	//test if configname already exists
	var test = 'start';
	var confignames = localStorage.getItem('confignames').split(","); 
	for (var i = 0; i < confignames.length; i++){
				if (confignames[i] === value ){
					test = 'true';
				}
		}
			if (test === 'true'){
		return false} 
		else {return true}
	}	
	
};
