let bodies = [];
const baseURL = "https://majazocom.github.io/Data/solaris.json";

async function getData() {
  try {
    const response = await fetch(baseURL);
    bodies = await response.json();

    console.log(response);
    console.log(bodies);

    renderDataToUI();
  } catch (error) {
    console.log("There was an error ", error);
  }
}
let solarsystemContainer = document.querySelector(".solarsystem-container");
function renderDataToUI() {
  bodies.forEach((body) => {
    let bodyEl = document.createElement("article");
    // let pi = 3.14;
    // let factor = 1 / 500;
    bodyEl.classList.add("body");
    bodyEl.setAttribute("id", body.id);
    bodyEl.innerHTML = `
        <a>${body.name}<a>
    `;

    //style="width:calc(${body.circumference}/${pi}*${factor}px); height:calc(${body.circumference}/${pi}*${factor}px)"

    solarsystemContainer.appendChild(bodyEl);

    body.HTML = bodyEl;
  });

  let clickedItems = document.querySelectorAll("article");

  clickedItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      let index = e.target.id;
      localStorage.setItem("body", JSON.stringify(bodies[index]));
      window.location.href = "body.html";
      console.log(bodies[index]);
      console.log(window);
    });
  });
}

getData();

let searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value);
  bodies.forEach((body) => {
    const isVisible = body.name.toLowerCase().includes(value);
    body.HTML.classList.toggle("hide", !isVisible);
  });
});
