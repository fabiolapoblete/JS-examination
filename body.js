renderObjectToUI();
function renderObjectToUI() {
  console.log(window);
  let body = JSON.parse(localStorage.getItem("body"));
  console.log(body);
  console.log(body.name);

  let objectContainer = document.querySelector(".body-section");
  objectContainer.innerHTML = `
        <h1>${body.name}</h1>
        <h2>${body.latinName}</h2>
  `;
}

// function renderCartToUI() {
//   let cartItems = JSON.parse(localStorage.getItem("product"));
//   console.log(cartItems, "added");

//   cartItems.forEach((item) => {
//     let cartItem = document.createElement("article");
//     let cartContainer = document.querySelector(".products-inCart");

//     cartItem.classList.add("product");

//     cartItem.innerHTML = `
//           <img src="img/${item.img}"/>
//           <h3>${item.name}</h3>
//           <h4>${item.pricePerHekto} kr/hg</h4>
//           <button id="${item.SerialNumber}">Add to cart</button>
//        `;

//     cartContainer.appendChild(cartItem);
//   });
// }
