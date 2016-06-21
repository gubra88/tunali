var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 3.20974,
				lng: 101.74452
			  });
			  
			  var marker = map.addMarker({
				lat: 3.20974,
				lng: 101.74452,
	            title: 'Company, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 3.20974,
		        lng : 101.74452
		      });
		    });
		}        

    };
}();