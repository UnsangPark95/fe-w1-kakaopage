/* eslint-disable no-unused-vars */
let category="webtoon";
const dummyPageHtml = "<br/><br/><img src='img/dummy.png'><br/>dummy page</img>"; 
const webtoonPageHtml = "<div>webtoon</div>"

const setCategory = ( newcategory ) => {
  category = newcategory;
  const contents = document.getElementById('contents');
  contents.innerHTML = domData[category];
  console.log(category);
} 

const domData = {
  home: dummyPageHtml,
  webtoon: webtoonPageHtml,
  webfiction: dummyPageHtml,
  movie: dummyPageHtml,
  broadcast: dummyPageHtml,
  book: dummyPageHtml,
}
