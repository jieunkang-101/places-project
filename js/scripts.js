function PlaceList() {
  this.places = [];
  this.currentId = 0;
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}

PlaceList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
  
PlaceList.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {     
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }                          
  };
  return false;
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
  var placeDisplay = $("ul#places");
  var htmlForPlacesInfo  = "";
  placeListtoDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li>" + place.placeName + "</li>";
  });
  placeDisplay.html(htmlForPlacesInfo);
};

function showPlace(placeId) {
  var place = placeList.findPlace(placeId)
  $("#show-places").show();
  $(".location").html(place.locale);
  $(".landmark").html(place.landmark);
  $(".timeofyear").html(place.timeOfYear);
  $(".notes").html(place.notes);
  var buttons = $("#buttons");
  buttons.empty();
  }

  function attachPlaceListners() {
    $("ul#places").on("click", "li", function() {
      showPlace(this.id);
    });
  }

$(document).ready(function() {
  attachPlaceListners();
  $("form#inputPlace").submit(function(event){
    event.preventDefault();
    var inputtedPlace = $("input#inputPlaces").val();
    var inputtedLocale = $("input#inputLocale").val();
    var inputtedLandmark = $("input#inputLandmark").val();
    var inputtedTimeOfYear = $("input#inputTimeOfYear").val();
    var inputtedNotes = $("input#inputNotes").val();
    var  newPlace = new Place (inputtedPlace, inputtedLocale, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    placeList.addPlace(newPlace);
    //console.log(placeList.places);
    displayPlaceList(placeList);
  })
});
