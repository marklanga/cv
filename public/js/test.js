function successGeo(position){
    alert('lat: ' + position.coords.latitude);
    alert('long: ' + position.coords.longitude);
    alert('accuracy: ' + position.coords.accuracy);
    //alert('We found the treasure: ' + position)
}
function failGeo(error){
    alert('Houston, we have a problem: ' + position);
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(successGeo, failGeo);
}else{
    alert('browser does not support geolocation :(');
}

// var vibrateInterval;

// function vibrate(duration){
//     navigator.vibrate(duration)
// }

// function stopVibrate(){
//     if(vibrateInterval) clearInterval(vibrateInterval);
//     navigator.vibrate(0);
// }

// startVibrate();