let products = [
    {
        id: '0',
        name: 'Green Hoodie',
        tag: 'greenhoodie',
        image: "./images/hd1.jpg",
        price: 700,
        inCart: 0,
        inStock: 7
    },
    {
        id: '1',
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        image: "./images/hd2.jpg",
        price: 750,
        inCart: 0,
        inStock: 12
    },

    {
        id: '2',
        name: 'Orange Hoodie',
        tag: 'orangehoodie',
        image: "./images/hd3.jpg",
        price: 720,
        inCart: 0,
        inStock: 13
    },

    {
        id: '3',
        name: 'Green-o Hoodie',
        tag: 'green-ohoodie',
        image: "./images/hd4.jpg",
        price: 800,
        inCart: 0,
        inStock: 14
    },

    {
        id: '4',
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        image: "./images/hd5.jpg",
        price: 850,
        inCart: 0,
        inStock: 15
    },

    {
        id: '5',
        name: 'Yellow Hoodie',
        tag: 'yellowhoodie',
        image: "./images/hd6.jpg",
        price: 700,
        inCart: 0,
        inStock: 18
    }

];

function navBar() {
    window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 600px)").matches) {
            dropDownBox.style.display = "none";
        } else {
            return 1;
        }
    });

    var dropDownBtn = document.getElementById("dropDownBtn");
    var dropDownBox = document.getElementById("dropDownBox");

    dropDownBtn.addEventListener("click", function () {
        if (dropDownBox.style.display === "block") {
            dropDownBox.style.display = "none"
        } else {
            dropDownBox.style.display = "block"
        }
    });
}
//display items

function displayItems() {
    let productContainer = document.getElementById('productsContainer');
    products.map(product => {
        productContainer.innerHTML = productContainer.innerHTML +
            `<div class="cards" id="cards">
        <div class="productImg" id="productImg">
        <img src="${product.image}" alt="hd1"class="img" id="img">                       
        </div>
        <span class="details" id="details">${product.name}</span>
        <button class="addToCart" id="addToCart">Cart Item</button>
        <span>${product.price}</span>
    </div>  `
    })
}
//onLoadcart
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('itemsInCart');
    if (productNumber) {
        document.getElementById('number').textContent = productNumber;
    }

}

//add items to cart
function addToCart() {
    let addToCarts = document.querySelectorAll('#addToCart');
    // addToCarts.forEach(function(cartBtn){
    //     cartBtn.addEventListener('click', () => {
    //         addCartNumber(products.forEach);            
    //     })
    // })
    //alternative method

    for (let i = 0; i < addToCarts.length; i++) {
        addToCarts[i].addEventListener('click', () => {
            addCartNumber(products[i]);
            totalCost(products[i]);
        })
    }
}

//add number to cart

function addCartNumber(product) {
    let productNumber = localStorage.getItem('itemsInCart');
    productNumber = parseInt(productNumber);

    let cartNumber = document.getElementById('number');
    if (productNumber) {
        localStorage.setItem('itemsInCart', productNumber + 1)
        cartNumber.textContent = productNumber + 1;
    } else {
        localStorage.setItem('itemsInCart', 1);
        cartNumber.textContent = productNumber + 1;
    }
    setItems(product);
}

// add carted items to local storage
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    console.log(product)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

///total cart cost
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}
//display total cost of items in cart
function displayTotalCost() {
    let cartCost = localStorage.getItem('totalCost');
    cartCost = JSON.parse(cartCost)
    console.log("this is me" + cartCost)

    let costContainer = document.getElementById("totalcost");


    if (cartCost && costContainer) {
        costContainer.textContent = cartCost;
    } else {
        return onLoadCartNumbers;
    }
}

// this function display selected content in cart page

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let cartContainer = document.querySelector(".cart");
    if (cartItems && cartContainer) {
        console.log("running");
        cartContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            cartContainer.innerHTML += `
            <div class="cartItem" id="cartItem">
            <input type="checkbox" checked disabled name="add" id="add">
            <div class="cartImgBox" id="cartImgBox">
                <img src="${item.image}" alt="" class="cartImg">
            </div>
            <div class="cartDetails">
                <h2 class="itemName">
                    ${item.name}
                </h2>
                <span class="itemLeft">${item.inStock} left in stock</span>
                <span class="inCart">${item.inCart} added to cart</span>
            </div>
            <span class="price">${item.price}$</span>
            <i class="fa-sharp fa-solid"></i>
            <i class="fa-sharp fa-solid fa-trash " id="delItem" ></i>
            </div>
            <div class="divider"></div>
        `
        });
    } else {
        


    }
}

function deleteCartItems(){
    localStorage.removeItem('productsInCart');
}

//clear cart function
function clearCart(){
    localStorage.clear();
}

displayCart();
displayTotalCost();
onLoadCartNumbers();

navBar();
displayItems();
addToCart();
