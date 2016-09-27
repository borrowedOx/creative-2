var state = false;
var lat = 0;
var lon = 0;
var markers = [];
var latlon={};
function initMap() {

	loc();

      }


function loc() {
	$.getJSON("http://ipinfo.io", function(response) {
	var loc  = response.loc.split(",");
	console.log(response);

	console.log(loc);
	lat = parseFloat(loc[0]);
	lon = parseFloat(loc[1]);
		console.log(lat);
		console.log(lon);
	console.log("hi");
var  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lon},
          zoom: 12
        });


	

	map.addListener('click', function(e) {
		latlon = e.latLng;
		var data = "<div id='pop_out'>";
		data += $("#data_text").val();
		data += "</div>";
		$("#data_text").val("");		
		var title = $("#title_text").val();
		$("#title_text").val("");		


		var marker = new google.maps.Marker({
			position: latlon,
			map:map,
			title: title
		});

	var infowindow = new google.maps.InfoWindow({
		content: data
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
		console.log("marker clicked");
	

	});

		markers.push(marker);

	
		console.log(e.latLng);
	});

	})
}

