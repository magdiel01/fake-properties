var properties = [];

/**
 * Utils
 */
var random = function(array) {
	var rand = Math.round( Math.random()*(array.length-1) ) ;
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
var homeVilleFeatures = ['Electricity', 'Water Heater', 'Ceiling Fan'];
var lotFeatures = ['Streets',];
var projectFeatures = ['Security', 'Maintenance'];
var communityFeatures = ['Airport', 'Taxi', 'School', 'Super Market', 'Bar', 'Restaurant'];

var fakeprop = {
	/**
	 * Function which generate a fake home object
	 */
	genHome: function(options) {
		return {
			ownerId: options.ownerId |'1',
			propertyId: options.propertyId | 'JGH-001',
			type: 'home',
			for: options.for | 'rent',
			title: random(config.titleAdjectives) + ' house in Cabarete, Dominican Republic',
			images: options.images | [
				'home_img1.jpg',
				'home_imgn.jpg'
			],
			description: 'Description here!',
			features: options.features | {
				communityFeatures: communityFeatures,
				propertyFeatures: homeVilleFeatures,
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
	 * Function which generate a fake apartment object
	 */
	genApartment: function(options) {
		return;
	}
};

module.exports = fakeprop;