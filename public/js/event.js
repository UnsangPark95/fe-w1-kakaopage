/* eslint-disable no-unused-vars */
var eventIndex = 0;

function nextEvent(n) {
  changeEvent(eventIndex += n);
}

function changeEvent(n) {
  var i;
  var events = document.getElementsByClassName("event");
  if (n > events.length) {eventIndex = 1}
  if (n < 1) {eventIndex = events.length}
  for (i = 0; i < events.length; i++) {
      events[i].style.display = "none";
  }
  events[eventIndex-1].style.display = "block";
}
