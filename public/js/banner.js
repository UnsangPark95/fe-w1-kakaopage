/* eslint-disable no-unused-vars */
var bannerIndex = 0;

function nextBanner(n) {
  changeBanner(bannerIndex += n);
}

function changeBanner(n) {
  var i;
  var banners = document.getElementsByClassName("banner");
  if (n > banners.length) {bannerIndex = 1}
  if (n < 1) {bannerIndex = banners.length}
  for (i = 0; i < banners.length; i++) {
      banners[i].style.display = "none";
  }

  banners[bannerIndex-1].style.display = "block";

}

function showBanners() {
  var i;
  var banners = document.getElementsByClassName("banner");
  for (i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > banners.length) {bannerIndex = 1}
  banners[bannerIndex-1].style.display = "block";
  setTimeout(showBanners, 3000);
}