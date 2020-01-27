function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}
// Business logic For Places project
function Place(placeName, locale, landmark, timeOfYear, notes){
  this.placeName = placeName;
  this.locale = locale;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


// User interface logic
var placeList = new PlaceList();

function displayPlaceList(placeListtoDisplay) {
  var placeList = $("ul#places");
  var htmlForPlacesInfo  = "";
  placeListtoDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li>" + place.locale + "</li>"
  });
  placeList.html(htmlForPlacesInfo);
};

$(document).ready(function() {
  $("form#inputPlace").submit(function(event){
    event.preventDefault();
    var inputtedLocale = $("input#inputLocale").val();
    var inputtedLandmark = $("input#inputLandmark").val();
    var inputtedTimeOfYear = $("input#inputTimeOfYear").val();
    var inputtedNotes = $("input#inputNotes").val();
    var  newPlace = new Place (inputtedLocale, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    placeList.addPlace(newPlace);
    //console.log(placeList.places);
    displayPlaceList(placeList);
  })
});

