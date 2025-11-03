async function asyncFetch(url, options) {
  const baseUrl = "https://media2.edu.metropolia.fi/restaurant";
  const response = await fetch(baseUrl + url, options);
  console.log(response);
  if (!response.ok) {
    throw new Error("Response not ok");
  }
  const jsonBody = await response.json();
  return jsonBody;
}

function generateMenuList(courses) {
  const menuList = document.createElement("ul");

  for (const course of courses) {
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.classList.add("course-name");
    name.textContent = course.name;

    const price = document.createElement("span");
    price.textContent = course.price;

    const diets = document.createElement("span");
    diets.textContent = course.diets;

    li.appendChild(name);
    li.appendChild(document.createTextNode(" – "));
    li.appendChild(price);
    li.appendChild(document.createTextNode(" "));   
    li.appendChild(diets);

    menuList.appendChild(li);
  }

  return menuList;
}

async function init() {
  let restaurants = await asyncFetch("/api/v1/restaurants", {});
  restaurants = restaurants.filter((a) => a.location.coordinates != null);
  restaurants.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const table = document.getElementsByTagName("table")[0];

  for (const restaurant of restaurants) {
    const trElem = document.createElement("tr");
    const td1Elem = document.createElement("td");
    td1Elem.textContent = restaurant.name;
    const td2Elem = document.createElement("td");
    td2Elem.textContent = restaurant.address;
    trElem.appendChild(td1Elem);
    trElem.appendChild(td2Elem);
    table.appendChild(trElem);

    trElem.addEventListener("click", async () => {
      const menu = await asyncFetch(
        `/api/v1/restaurants/daily/${restaurant._id}/en`,
        {}
      );
      console.log(menu);
      const rows = table.querySelectorAll("tr");
      rows.forEach((row) => row.classList.remove("highlight"));
      trElem.classList.add("highlight");

      const dialog = document.getElementsByTagName("dialog")[0];
      const restName = document.getElementById("name");
      const restAdd = document.getElementById("address");
      const restPos = document.getElementById("postalcode");
      const restPhone = document.getElementById("phone");
      const restCom = document.getElementById("company");
      const restMenu = document.getElementById("menu");
      const button = document.getElementById("close");
      button.addEventListener("click", () => dialog.close());

      restName.textContent = restaurant.name;
      restAdd.textContent = restaurant.address;
      restPos.textContent = restaurant.postalCode;
      restPhone.textContent = restaurant.phone;
      restCom.textContent = restaurant.company;
      restMenu.textContent = "";

      menu.courses == null || menu.courses.length === 0
        ? (restMenu.textContent = "No menu for today")
        : restMenu.appendChild(generateMenuList(menu.courses));
      dialog.showModal();
    });
  }
}

init();
