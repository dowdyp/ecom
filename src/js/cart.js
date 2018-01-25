function() {
	if(!localStorage) {
		var cart = "[]"
		localStorage.setItem("cart", cart)
		console.log("new cart created")
	}
}
