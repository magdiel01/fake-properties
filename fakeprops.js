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
var config = {
	idPrefix: 'JG',
	titleAdjectives: ['Beautifil', 'Amazing', 'Luxury']
};

/**
 * Features List
 */
var commonFeatures = ['Beach Front', 'Security', 'Phone', 'Internet',];
var houseVilleFeatures = ['Electricity', 'Water Heater', 'Ceiling Fan'];
var lotFeatures = ['Streets',];
var projectFeatures = ['Security', 'Maintenance'];
var communityFeatures = ['Airport', 'Taxi', 'School', 'Super Market', 'Bar', 'Restaurant'];

var fakeprops = {
	/**
	 * Function which generates a fake house or ville
	 */
	House: function(options) {
		var options = options || {};
		return {
			owner_id: options.owner_id || '1',
			property_id: options.property_id || 'JGH001',
			type: 'house',
			for: options.for || random(['sale', 'rent']),
			title: random(config.titleAdjectives) + ' house in Cabarete, Dominican Republic.',
			images: options.images || [
				'house_img1.jpg',
				'house_imgn.jpg'
			],
			description: 'Description here!',
			features: options.features || {
				community_features: communityFeatures,
				property_features: houseVilleFeatures,
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
	Apartment: function(options) {
		return;
	}
};


module.exports = fakeprops;
