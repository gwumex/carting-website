let products = [
    {
        name:'Green Hoodie',
        tag:'greenhoodie',
        price:700,
        inCart:0
    },
    {
        name:'Black Hoodie',
        tag:'blackhoodie',
        price:750,
        inCart:0
    },

    {
        name:'Orange Hoodie',
        tag:'orangehoodie',
        price:720,
        inCart:0
    },

    {
        name:'Green-o Hoodie',
        tag:'green-ohoodie',
        price:800,
        inCart:0
    },

    {
        name:'Grey Hoodie',
        tag:'greyhoodie',
        price:850,
        inCart:0
    },

    {
        name:'Yellow Hoodie',
        tag:'yellowhoodie',
        price:700,
        inCart:0
    }
    
];

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        dropDownBox.style.display ="none";
    } else {
      return 1;
    }
  });

var dropDownBtn = document.getElementById("dropDownBtn");
var dropDownBox = document.getElementById("dropDownBox");

dropDownBtn.addEventListener("click", function(){
    if(dropDownBox.style.display === "block"){
        dropDownBox.style.display = "none"
    } else{
        dropDownBox.style.display = "block"
    }
});
