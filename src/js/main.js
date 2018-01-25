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
			console.log(id + " has been added to cart");
			var cart = JSON.parse(localStorage.getItem("cart"));

            if (cart) {
                var ifExists = function checkIfItemExists(id) {
                    for (i = 0; i < cart.length; i++) {
                        if (id == cart[i].item) {
                            return i;
                        }
                    }
                }

            var x = ifExists(id);
            console.log(x);
            if (cart[x]) {
                cart[x].quantity++
                console.log(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
            } else {
                var temp = {};
                temp.item = id;
                temp.quantity = 1;
                cart.push(temp);
                console.log(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
            }

			} else {
				temp = [];
				var push = {};
				push.item = id;
				push.quantity = 1;
				temp.push(push);
				var updated = JSON.stringify(temp);
				localStorage.setItem("cart", updated);
				console.log(updated);
			}
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