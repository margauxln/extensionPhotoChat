// creation de la variable qui contient les images du site internet sous la forme d'un tableau

var img = document.getElementsByTagName("img");
console.log(img);

// Chrome récupere la source de l'image choisie

var pict = "images/kitten.jpg"
var url = chrome.extension.getURL(pict);

// boucle pour changer toutes les url des images du site par celle pré-définie
for(var i = 0; i < img.length ; i++) {
    img[i].src = url;
  }

  
