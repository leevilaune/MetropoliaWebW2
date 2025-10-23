const target = document.getElementById("target");
const agent = document.createElement("p");
agent.textContent = navigator.userAgent;

const platform = document.createElement("p");
platform.textContent = navigator.platform;

const screenSize = document.createElement("p");
screenSize.textContent = `Screen: Width=${screen.width}, Height=${screen.height}`;

const viewport = document.createElement("p");
viewport.textContent = `Viewport: Width=${window.innerWidth}, Height=${window.innerHeight}`;

const event = new Date(Date.now());
const date = event.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" });
const dateP = document.createElement("p");
dateP.textContent = date;

target.appendChild(agent);
target.appendChild(platform);
target.appendChild(screenSize);
target.appendChild(viewport);
target.appendChild(dateP);

