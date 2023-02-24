let bodies = [];
const baseURL = "https://majazocom.github.io/Data/solaris.json";

getData();

//Functionality for search bar
let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", filterBodies);

async function getData() {
  try {
    const response = await fetch(baseURL);
    bodies = await response.json();

    renderDataToUI();
  } catch (error) {
    console.log("There was an error ", error);
  }
}

function renderDataToUI() {
  let solarsystemContainer = document.querySelector(".solarsystem-container");

  bodies.forEach((body) => {
    //Create a div for each object/body in bodies
    let bodyEl = document.createElement("div");

    //Add classname and id for styling and functionality
    bodyEl.classList.add("body");
    bodyEl.classList.add(body.name);
    bodyEl.setAttribute("id", body.id);

    bodyEl.innerHTML = `
      <p class="body-name">${body.name}</p>
    `;

    //Append each body to the solarsystem container
    solarsystemContainer.appendChild(bodyEl);

    body.HTML = bodyEl;
  });

  //Add an eventlistener to each body
  bodyOnClick();
}

function bodyOnClick() {
  //Select all bodies and make them clickable
  let clickableItems = document.querySelectorAll(".body");

  clickableItems.forEach((clickableItem) => {
    clickableItem.addEventListener("click", () => {
      //Redirects to body.html to present data of selected body on click
      let index = clickableItem.id;
      //Store clicked object/body in localstorage
      localStorage.setItem("body", JSON.stringify(bodies[index]));
      window.location.href = "body.html";
    });
  });
}

//Function that filters (toggles the hide class) bodies depending och the search bar input
function filterBodies() {
  const value = searchInput.value.toLowerCase();

  // let listOfBodies = document.querySelectorAll(".highlight");
  // let listOfHiddenBodies = document.querySelectorAll(".hide");
  let noResult = document.querySelector(".alert");

  bodies.forEach((body) => {
    const match = body.name.toLowerCase().includes(value);

    body.HTML.classList.toggle("hide", !match);
    body.HTML.classList.toggle("highlight", match);

    if (value === "") {
      body.HTML.classList.remove("highlight"); //If search bar is empty there is no styling, all bodies are visible
    }

    let listOfBodies = document.querySelectorAll(".highlight");
    let listOfHiddenBodies = document.querySelectorAll(".hide");

    //Logic for when there are no search results
    if (listOfBodies.length == 0 && listOfHiddenBodies.length == 9) {
      console.log(listOfHiddenBodies);
      noResult.innerText = "Din sökning gav inget resultat";
    } else if (listOfHiddenBodies.length < 9) {
      noResult.innerHTML = "";
    }
  });
}
