function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}
// Business logic For Places project
function Place(locale, landMark, timeOfYear, notes){
  this.locale = locale;
  this.landMark = landMark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

var placeList = new PlaceList();
var Japan = Place("Tokyo", "Tokyo Tower", "dlfjdlfdj");
console.log(placeList.addPlace(Japan));
