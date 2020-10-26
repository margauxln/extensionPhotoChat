// Creer d'une variable bouton pour chaque image pré-définie puis au clic lancer la fonction qui va permettre de remplacer les imgs (à faire sorrry)
// Apparemment il faut utiliser la fonction browser.tabs.executeScript pour lier le popup.js avec le content.js :) let's go baby!
var btnKitten = document.getElementById("kitten");
btnKitten.addEventListener('click', function () {
console.log("kitten");
})


// var listOfImages = Array.from(document.getElementsByTagName("img").innerHTML);
// console.log(listOfImages);

// var btn = document.getElementById("save");
// console.log("btn= "+ btn);
//
// function pictUrl (animalName){
//   switch(animalName){
//     case "Kitten":
//       return browser.extension.getURL("images/kitten.jpg");
//     case "Rabbit":
//       return browser.extension.getURL("images/rabbit.jpg");
//     case "Deer":
//       return browser.extension.getURL("images/deer.jpg");
//     case "Puppy":
//         return browser.extension.getURL("images/puppy.jpg");
//   }
//
// }
//
// btn.addEventListener('click', function () {
//   let animalChosen = document.getElementsByTagName("img").innerHTML;
//   let animalChosenUrl = pictUrl(animalChosen);
// })
//



// }
//
//
//
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("img")) {
//     var animalName = e.target.textContent;
//     var animalNameURL = pictUrl(animalName);
//
//
//
//     var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
//     gettingActiveTab.then((tabs) => {
//       browser.tabs.sendMessage(tabs[0].id, {animalUrl: animalNameURL});
//     });
//   }
//   else if (e.target.classList.contains("clear")) {
//     browser.tabs.reload();
//     window.close();
//   }
// });
