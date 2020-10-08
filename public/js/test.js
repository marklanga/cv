// function successGeo(position){
//     alert('lat: ' + position.coords.latitude);
//     alert('long: ' + position.coords.longitude);
//     alert('accuracy: ' + position.coords.accuracy);
//     //alert('We found the treasure: ' + position)
// }
// function failGeo(error){
//     alert('Houston, we have a problem: ' + position);
// }

// if (navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(successGeo, failGeo);
// } else {
//     alert('browser does not support geolocation :(');
// }


fetch('js/skills.json').then(function(response){
    return response.json();
}).then(function (obj){
    console.log(obj)
}).catch(function(error){
    console.log('Something went wrong.');
    console.log(error);
});
