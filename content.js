var img = document.getElementsByTagName("img");
console.log(img);

var pict = "images/kitten.jpg"
var url = chrome.extension.getURL(pict);

for(var i = 0; i < img.length ; i++) {
    img[i].src = url;
  }

  
