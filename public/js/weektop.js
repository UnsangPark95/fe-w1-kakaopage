/* eslint-disable no-unused-vars */

var request = new XMLHttpRequest();

const weekBtns = document.querySelectorAll("button.weektop_btn");
const jsonFilePath = "../data/webtoon.json";

weekBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    console.log(btn);
  })
})

const readjsonFile = (filePath, callback) => {
  var jsonFile = new XMLHttpRequest();
  jsonFile.overrideMimeType("application/json");
  jsonFile.open("GET", filePath, true);
  jsonFile.onreadystatechange = () => {
      if(jsonFile.readyState === 4 && jsonFile.status == "200") {
          callback(jsonFile.responseText);
      }
  }
  jsonFile.send(null);
}

const getWebtoonData = (week) => {
  readjsonFile(jsonFilePath, text => {
    var data = JSON.parse(text);
    data['webtoon'].forEach(webtoon => {
      if(webtoon['week'] == week){
        console.log(webtoon['title']);
      }
    })
  });
}

getWebtoonData("mon");

