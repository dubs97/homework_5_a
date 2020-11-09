var productArr = []
var productArr2 = []


class Product {
    
    constructor(type,quantity,flavor,total) {
        this.type = type
        this.quantity = quantity
        this.flavor = flavor 
        this.total = total

    }
} 


function updateProductSubtotal() {
    let productSubtotal = 0;

    let amountValue = document.querySelector('input[name="quant"]:checked').value;

 
    if (amountValue == 1) {
        productSubtotal = 4.99;
    } else if (amountValue == 3) {
        productSubtotal = 7.99;
    } else if (amountValue == 6) {
        productSubtotal = 10.99;
    } else {
        productSubtotal = 15.99;
    }
   
    productPageSubtotal.innerHTML = productSubtotal;

}

function cartLoaded() {

    var loadedProductArr = localStorage.getItem('order')
    var productArr2 = JSON.parse(loadedProductArr)

    var listOfProducts = document.getElementById('listOfProducts')
	
	for(var i = 0; i < productArr2.length; i++) {
       var bun = productArr2[i]
       var bunType = bun.type
	   var bunQuantity = bun.quantity
       var bunFlavor = bun.flavor
       var bunTotal = bun.total
		listOfProducts.innerHTML += '<div <ul class="ps">' + '<li id="a1"</li>'  + bun.type + '<li id="a1"</li> Quantity: ' + bun.quantity+ '<li id="a2"</li> Flavor: ' + bun.flavor + '<li id="a3"</li> Total: '+ bun.total + '<span class="vp" id="a8" onclick="deleteProduct(' + i + ')">Delete item</span>'+ '</li></div>' 
		listOfProducts.innerHTML += '<br /><br /><br />'
	   }
	   
	   
	}

function saveEdits() {

    localStorage.setItem('order', JSON.stringify(productArr2))
    }
    
function deleteProduct(i) {
    var loadedProductArr = localStorage.getItem('order')
	productArr2 = JSON.parse(loadedProductArr)
    alert('Deleting item')
    console.log('before we delete')
    console.log(productArr2)
        
    productArr2.splice(i,1)
        
    console.log('after we delete')
    console.log(productArr2)
        
    listOfProducts.innerHTML = ''
        
    for(var i = 0; i < productArr2.length; i++) {
        var bun = productArr2[i]
        var bunType = bun.type
        var bunQuantity = bun.quantity
        var bunFlavor = bun.flavor
        var bunTotal = bun.total
         listOfProducts.innerHTML += '<div <ul class="ps">' + '<li id="a1"</li>'  + bun.type + '<li id="a1"</li> Quantity: ' + bun.quantity+ '<li id="a2"</li> Flavor: ' + bun.flavor + '<li id="a3"</li> Total: '+ bun.total + '<span class="vp" id="a8" onclick="deleteProduct(' + i + ')">Delete item</span>' + '</li></div>' 
         listOfProducts.innerHTML += '<br /><br /><br />'
        }
    

 
    }
    

function addToCart() {

    alert("Added to Cart")

    var producttype = document.getElementById("Type").innerHTML ; 

    var flavors = document.getElementsByName('flavor') ;

    var selectedflavor = "blank";

    for (var i=0; i < flavors.length; i++) {
         if(flavors[i].checked) {
                selectedflavor = flavors[i].value;
         }

    }


    let amountValue = document.querySelector('input[name="quant"]:checked').value;

    var totalAmt = document.getElementById("Subtotal").innerHTML ;

    console.log(productArr)
    var bun = new Product(producttype,amountValue,selectedflavor,totalAmt)

    productArr.push(bun)

    updateCartNumber(productArr.length)

}

function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num

}

let productPageSubtotal = document.getElementById("Subtotal");

function saveEdits2() {

    localStorage.setItem('order', JSON.stringify(productArr))
    }

function goToCartPage() {
    
    localStorage.setItem('order', JSON.stringify(productArr))

    window.location.replace("cart.html")


}

