$(document).ready(function() {
	$("#get_data").on("click", function () {
        var param = $("#param").val();
        console.log(param);

        var url = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=jonathan-testing-PRD-82f530923-d8958cf2&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +param;
        $.getJSON(url, function(data) {
        var everything;
        everything = "<ul>";
	everything += "</ul>";
	console.log(data.toString());
        $('#results').html(everything);
})


});

});


var map;
var lat = 0;
var lon = 0;
function initMap() {
	//lat = 0;
	//lon = 0;

	loc();


	console.log(lat);
	console.log(lon);
       



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
 map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lon},
          zoom: 18
        });


	})
}

