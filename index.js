var watchID;

//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
    
    

	
	//set up listener for button click
	$('#sucess').on('click', getPosition);
    $('#fail').on('click', stopPosition);
	//$(document).on('click', sucessPosition);
    
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});

 var locationOptions = { 
	maximumAge: 10000, 
	timeout: 6000, 
	enableHighAccuracy: true 
};


//Call this function when you want to get the current position
function getPosition() {
	
    console.log('getPosition')
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
    watchID = navigator.geolocation.watchPosition(
				successPosition, failPosition, locationOptions);
    
    
}

function stopPosition(){
    console.log('stopPosition')
    
    navigator.geolocation.clearWatch(watchID);
    
    
}


//called when the position is successfully determined
function successPosition(position) {
    
   
        
	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude; 
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + time);
	$('#lattext').val("Recieved data at " + latitude);
    $('#longtext').val("Recieved data at " + longitude);
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}