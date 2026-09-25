// ======================================================
// FOODHUB FOOD ORDERING WEBSITE
// ======================================================


// ================= CART DATA =================

let cart = [];


// ================= ADD TO CART =================

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart!");
}


// ================= UPDATE CART =================

function updateCart() {

    const cartCount = document.getElementById("cart-count");

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;

    displayCart();
}


// ================= DISPLAY CART =================

function displayCart() {

    const cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div style="text-align:center; padding:30px;">
                <h3>Your cart is empty 🛒</h3>
                <p>Add some delicious food!</p>
            </div>
        `;

        document.getElementById("subtotal").textContent = "₹0";
        document.getElementById("delivery").textContent = "₹0";
        document.getElementById("total").textContent = "₹0";

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-info">

                    <h3>${item.name}</h3>

                    <p>
                        ₹${item.price} × ${item.quantity}
                        = ₹${itemTotal}
                    </p>

                    <button
                        class="remove-button"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>


                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <strong>${item.quantity}</strong>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

            </div>

        `;

    });


    calculateTotal();
}


// ================= INCREASE QUANTITY =================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// ================= DECREASE QUANTITY =================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();
}


// ================= REMOVE ITEM =================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// ================= CALCULATE TOTAL =================

function calculateTotal() {

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

    });


    let delivery = subtotal > 0 ? 40 : 0;

    let total = subtotal + delivery;


    document.getElementById("subtotal").textContent =
        "₹" + subtotal;

    document.getElementById("delivery").textContent =
        "₹" + delivery;

    document.getElementById("total").textContent =
        "₹" + total;
}


// ================= OPEN CART =================

function openCart() {

    document.getElementById("cart-modal").style.display = "flex";

    displayCart();
}


// ================= CLOSE CART =================

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    closeCart();

    document.getElementById("checkout-modal").style.display = "flex";
}


// ================= CLOSE CHECKOUT =================

function closeCheckout() {

    document.getElementById("checkout-modal").style.display = "none";
}


// ================= PLACE ORDER =================

function placeOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("customer-name").value;

    const phone =
        document.getElementById("customer-phone").value;

    const address =
        document.getElementById("customer-address").value;

    const payment =
        document.getElementById("payment").value;


    if (
        name === "" ||
        phone === "" ||
        address === ""
    ) {

        alert("Please fill all details.");

        return;
    }


    const orderNumber =
        "FH" +
        Math.floor(
            100000 + Math.random() * 900000
        );


    document.getElementById("order-number").textContent =
        "Order ID: " + orderNumber;


    console.log("ORDER DETAILS");

    console.log("Name:", name);

    console.log("Phone:", phone);

    console.log("Address:", address);

    console.log("Payment:", payment);

    console.log("Items:", cart);


    closeCheckout();

    document.getElementById("success-modal").style.display = "flex";


    // Empty cart

    cart = [];

    updateCart();


    // Clear form

    document.querySelector(".checkout-box form").reset();
}


// ================= CLOSE SUCCESS =================

function closeSuccess() {

    document.getElementById("success-modal").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= CATEGORY FILTER =================

function filterFood(category) {

    const cards =
        document.querySelectorAll(".food-card");


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= SEARCH FOOD =================

function searchFood() {

    const searchText =
        document
            .getElementById("search")
            .value
            .toLowerCase();


    const cards =
        document.querySelectorAll(".food-card");


    cards.forEach(card => {

        const foodName =
            card
                .querySelector("h3")
                .textContent
                .toLowerCase();


        const description =
            card
                .querySelector("p")
                .textContent
                .toLowerCase();


        if (
            foodName.includes(searchText) ||
            description.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= OFFER =================

function showOffer() {

    alert(
        "🎉 Congratulations!\n\n" +
        "Use coupon code WELCOME20\n" +
        "to get 20% OFF your first order!"
    );

}


// ================= CLOSE MODAL ON OUTSIDE CLICK =================

window.onclick = function(event) {

    const cartModal =
        document.getElementById("cart-modal");

    const checkoutModal =
        document.getElementById("checkout-modal");

    const successModal =
        document.getElementById("success-modal");


    if (event.target === cartModal) {

        closeCart();

    }


    if (event.target === checkoutModal) {

        closeCheckout();

    }


    if (event.target === successModal) {

        closeSuccess();

    }

};


// ================= INITIALIZE =================

updateCart();