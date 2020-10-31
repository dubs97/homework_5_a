var productArr = []

class Product {
    
    constructor(quantity,flavor) {
        this.quantity = quantity
        this.flavor = flavor 

    }
} 


function addToCart() {
    alert("Added to Cart")

    var quantity = document.getElementById('quantity').value 

    var flavors = document.getElementsByName('flavor') ;

    var selectedflavor = "blank";

    for (var i=0; i < flavors.length; i++) {
         if(flavors[i].checked) {
                selectedflavor = flavors[i].value;
         }

    }

    var bun = new Product(quantity,selectedflavor)

    productArr.push(bun)

    updateCartNumber(productArr.length)

}

function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num

}

let productPageSubtotal = document.getElementById("Subtotal");

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

    console.log(productSubtotal);
}

