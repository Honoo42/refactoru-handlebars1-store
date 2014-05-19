$(document).on('ready', function() {
	var productsData = {
		productsList: [
		  {
		    title: "Super Mario World",
		    cost: 11.25,
		    image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
		    details: {
		      players: "1-2 players",
		      levels: "74 different areas in 7 different castles"
		    }
		  },
		  {
		    title: "Donkey Kong Country",
		    cost: 12.45,
		    image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
		    sale: 5.00,
		    details: {
		      characters: "Play as Donkey Kong and Diddy Kong",
		      enemies: "Fight against the evil Kremlings"
		    }
		  },
		  {
		    title: "Street Fighter II",
		    cost: 4.94,
		    image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
		    details: {
		      description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
		    }
		  }
		]
	};
  var productTemplate= $('#product-template');
  var productListing = productTemplate.html();
  // console.log(productListing);

  var productRender = Handlebars.compile(productListing);

  for (var i = 0; i < productsData.productsList.length; i++) {
  	var outputHtml = productRender(productsData.productsList[i]);

  	$('#product-inventory').append(outputHtml);
  };
  var wishlistTemplate = $('#wishlist-template');
  var wishListing = wishlistTemplate.html();
  var wishRender = Handlebars.compile(wishListing);

  $('#product-inventory').on('click','.product',function(){
  	var listedWish = this;
  	console.log(this);
  	console.log(listedWish);
  	var outputWishes = wishRender();
  	console.log(outputWishes);
  	$('#wishlist').append($(listedWish));
  });
  // var outputHtml = productRender(productsData.productsList[0]);
  // console.log(productsData.productsList[0].title);
  // console.log(outputHtml);

  	// $('#product-inventory').append(outputHtml);
});