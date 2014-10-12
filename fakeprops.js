var properties = [];

/**
 * Utils
 */
var random = function(array) {
	var rand = Math.round( Math.random()*(array.length-1) );
	return array[rand];
};



/**
 * Config
 */
var ID_PREFIX = 'JG';
var TITLE_ADJETIVES = ['Beautifil', 'Amazing', 'Luxury'];



/**
 * Features List
 */
var common_features = ['Beach Front', 'Security', 'Phone', 'Internet',];
var home_ville_features = ['Electricity', 'Water Heater', 'Ceiling Fan'];
var lot_features = ['Streets',];
var project_features = ['Security', 'Maintenance'];
var community_features = ['Airport', 'Taxi', 'School', 'Super Market', 'Bar', 'Restaurant'];


var fakeprops = {
	/**
	 * Function which generates a fake house or ville
	 */
	gen_house: function(options) {
		var options = options || {};
		return {
			owner_id: options.owner_id || '1',
			property_id: options.property_id || 'JGH001',
			type: 'home',
			for: options.for || random(['sale', 'rent']),
			title: random(TITLE_ADJETIVES) + ' house in Cabarete, Dominican Republic.',
			images: options.images || [
				'home_img1.jpg',
				'home_imgn.jpg'
			],
			description: 'Description here!',
			features: options.features || {
				community_features: community_features,
				property_features: home_ville_features,
			},
			price: {
				rental: {
					day: 20,
					week: 100,
					month: 300,
				},
				sale: 175000
			}
		};
	},



	/**
	 * Function which generates a fake apartment object
	 */
	gen_apartment: function(options) {
		return;
	}
};


module.exports = fakeprops;
