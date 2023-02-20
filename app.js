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

function renderDataToUI() {
  bodies.forEach((body) => {
    let bodyEl = document.createElement("article");
    let solarsystemContainer = document.querySelector(".solarsystem-container");

    bodyEl.classList.add("body");
    bodyEl.setAttribute("id", body.id);
    bodyEl.innerHTML = `
        <a>${body.name}<a>
    `;
    // console.log(body);

    solarsystemContainer.appendChild(bodyEl);
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
