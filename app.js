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
    let bodyEl = document.createElement("div");
    bodyEl.classList.add("body");
    bodyEl.classList.add(body.name);
    bodyEl.setAttribute("id", body.id);
    bodyEl.innerHTML = `
      <p class="body-name">${body.name}</p>
    `;

    solarsystemContainer.appendChild(bodyEl);

    body.HTML = bodyEl;
  });

  let clickableItems = document.querySelectorAll(".body");

  clickableItems.forEach((clickableItem) => {
    clickableItem.addEventListener("click", () => {
      let index = clickableItem.id;
      localStorage.setItem("body", JSON.stringify(bodies[index]));
      window.location.href = "body.html";
      console.log(bodies[index]);
      console.log(window);
    });
  });
}

getData();

let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value);
  bodies.forEach((body) => {
    const isVisible = body.name.toLowerCase().includes(value);
    body.HTML.classList.toggle("hide", !isVisible);
    body.HTML.classList.toggle("visible", isVisible);
  });
});
