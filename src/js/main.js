var recommended = new Vue({
	el: "#recommended",
	data: {
		items: [
		{
			thumb_url: './data/images/hoodie.jpg',
			keyword: 'Hoodie',
			desc: 'hoodie',
			pid: 1,
			price: 29.99
		}, 
		{
			thumb_url: './data/images/tshirt.jpg',
			keyword: 'T-Shirt',
			desc: 't shirt',
			pid: 2,
			price: 19.99
		}, 
		{
			thumb_url: './data/images/pants.jpg',
			keyword: 'Pants',
			desc: 'pants',
			pid: 3,
			price: 24.99
		}]
		
	},

	methods: {
		addToCart: function(id) {
			
			// what are you adding?
			console.log(id + " is being added to cart");


			// get the cart
			var cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) cart = [];


            // look for the item
        	x = -1;
            for(i in cart) if(cart[i].item == id) x = i;


            // add it
            if (x + 1) {
                cart[x].quantity++
            } 
            else {
                cart.push({
                	item : id,
                	quantity : 1
                });
            }

			
			// UPDATE CART
			console.log(cart);
			localStorage.setItem("cart", JSON.stringify(cart));

		},
		clearCart: function() {
			localStorage.removeItem("cart");
			console.log(JSON.parse(localStorage.getItem("cart")));
		}
	}
});

var app = new Vue({
	el: "#app",
	methods: {		

	}
})



// function determineIfItemExists(id) {
//     for( i = 0; i < cart.length; i++) {
//         if (id == cart[i].item) {
//             item = cart[i];
//             return item;
//         }
//     }
//     return false;
// }

// if(cart) {
//     var itemToIncreaseQuantity = determineIfItemExists(id);
//     if (itemToIncreaseQuantity != false) {
//         console.log(itemToIncreaseQuantity);
//         itemToIncreaseQuantity.quantity = itemToIncreaseQuantity + 1;
//         localStorage.setItem("cart", JSON.stringify(cart))
//     } else {
//         item = {};
//         item.item = id;
//         item.quantity = 1;
//         cart.push(item);
//         console.log(cart);
//     }