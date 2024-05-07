// ************Side nav*******
function sidenav() {
	document.querySelector(".sidenav").style.display = "flex";
}
function sidenavclose() {
	document.querySelector(".sidenav").style.display = "none";
}
// ***********cart**************
function cart() {
	document.getElementById("cartbox").style.display = "flex";
	document.querySelector(".sidenav").style.display = "none";
}
function cartclose() {
	document.getElementById("cartbox").style.display = "none";
}

// ****************

function addtocartclick(clickedProduct) {
	let title = clickedProduct.querySelector(".product-Name").innerText;
	let image = clickedProduct.querySelector(".product-Image").src;
	let price = clickedProduct.querySelector(".product-price").innerText;
	additemtocart(title, image, price);
}

function additemtocart(title, image, price) {
	let cart = document.createElement('div')
	let cartitems = document.getElementsByClassName('allitems')[0]
	let carcontents =
		`
		<div class ="allitems">
	<div class="items" >
	<img class="product-Image" src="${image}" >
	<h2 class="product-Name">${title}</h2>
	<h3 class="product-price">${price}</h3>
	<svg onclick="removeitem(this.parentNode)" xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34">
            <path
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
	</div>
  </div>`
	cart.innerHTML = carcontents
	cartitems.style.display = 'flex';
	cartitems.style.flexDirection = 'column';
	cartitems.append(cart)
	alert("Added to cart")
}
function removeitem(item) {
	item.remove()
}

// *****************Feature products**************
function featureProduct(clickedProduct) {
	let title = clickedProduct.querySelector(".product-Name").innerText;
	let image = clickedProduct.querySelector(".product-Image").src;
	let price = clickedProduct.querySelector(".product-price").innerText;
	window.location.href = `feature.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
}
const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const image = params.get('image');
const price = params.get('price');

if (title && image && price) {
	const mainDiv = document.querySelector('.main');
	const featureTab = `
		<div class="leftdiv">
			<img id="featureImage" src="${image}" alt="">
		</div>
		<div class="rightdiv">
			<h1>${title}</h1>
			<h3>Champion</>
			<h3>${price}</h3>
			<div class="quantity">
			<label for="quantity">Quantity:</label>
			<input type="number" id="quantity" name="quantity" value="1" min="1">
		</div>
			<div class="buttons">
				<button>Buy Now</button>
				<button>Add To Cart</button>
				<button onclick="window.history.back()">Back</button>
			</div>
		</div>
	`;
	mainDiv.innerHTML = featureTab;
}


