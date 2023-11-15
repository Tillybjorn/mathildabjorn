$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
    $input.val(value);
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }
 
    $input.val(value);
});


// Håller koll på varukorgen
var cart = [];

// Funktion för att lägga till en produkt i varukorgen
function addToCart(productName, price) {
    var product = {
        name: productName,
        price: price
    };
    cart.push(product);
    updateCart();
}

// Funktion för att uppdatera varukorgen och totala kostnaden
function updateCart() {
    var totalPrice = 0;
    var cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Rensa varukorgen innan uppdatering

    // Loopa igenom varje produkt i varukorgen
    cart.forEach(function(product) {
        // Skapa en ny listpunkt för varje produkt
        var listItem = document.createElement('li');
        listItem.textContent = product.name + ' - ' + product.price + ' KR';
        cartList.appendChild(listItem);

        // Uppdatera totala kostnaden
        totalPrice += product.price;
    });

    // Uppdatera den totala kostnaden på sidan
    document.getElementById('total-price').textContent = totalPrice + ' KR';
}

// Lyssna på klick för plus-knappen
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity').find('input');
    var productName = $this.closest('.item').find('.description span:first').text();
    var price = parseInt($this.closest('.item').find('.total-price').text());

    // Lägg till produkten i varukorgen
    addToCart(productName, price);

    // Uppdatera totala kostnaden
    updateCart();
});

// Lyssna på klick för minus-knappen
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity').find('input');
    var productName = $this.closest('.item').find('.description span:first').text();
    var price = parseInt($this.closest('.item').find('.total-price').text());

    // Ta bort en produkt från varukorgen
    cart = cart.filter(function(product) {
        return product.name !== productName;
    });

    // Uppdatera totala kostnaden
    updateCart();
});

