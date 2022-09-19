let products = [
    {
        id: '0',
        name:'Green Hoodie',
        tag:'greenhoodie',
        image: "./images/hd1.jpg",
        price:700,
        inCart:0
    },
    {
        id: '1',
        name:'Black Hoodie',
        tag:'blackhoodie',
        image: "./images/hd2.jpg",
        price:750,
        inCart:0
    },

    {
        id: '2',
        name:'Orange Hoodie',
        tag:'orangehoodie',
        image: "./images/hd3.jpg",
        price:720,
        inCart:0
    },

    {
        id: '3',
        name:'Green-o Hoodie',
        tag:'green-ohoodie',
        image: "./images/hd4.jpg",
        price:800,
        inCart:0
    },

    {
        id: '4',
        name:'Grey Hoodie',
        tag:'greyhoodie',
        image: "./images/hd5.jpg",
        price:850,
        inCart:0
    },

    {
        id: '5',
        name:'Yellow Hoodie',
        tag:'yellowhoodie',
        image: "./images/hd6.jpg",
        price:700,
        inCart:0
    }
    
];

function navBar (){
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
}
//display items

function displayItems(){
    let productContainer = document.getElementById('productsContainer');
    products.map(product => {
        productContainer.innerHTML += 
        `<div class="cards" id="cards">
        <div class="productImg" id="productImg">
        <img src="${product.image}" alt="hd1"class="img" id="img">                       
        </div>
        <span class="details" id="details">${product.name}</span>
        <button class="addToCart" id="">Cart Item</button>
    </div>  `
    })
}



navBar();
displayItems();