/* eslint-disable no-unused-vars */
var eventIndex = 0;

document.getElementById('eventPrev').addEventListener("click", () => {
  changeEvent(eventIndex += -1);
})

document.getElementById('eventNext').addEventListener("click", () => {
  changeEvent(eventIndex += 1);
})

const changeEvent = curEvent => {
  var idx;
  var events = document.getElementsByClassName("event");
  if (curEvent > events.length) {eventIndex = 1}
  if (curEvent < 1) {eventIndex = events.length}
  for (idx = 0; idx < events.length; idx++) {
      events[idx].style.display = "none";
  }
  events[eventIndex-1].style.display = "block";
}

changeEvent(eventIndex);
