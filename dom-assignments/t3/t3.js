const target = document.getElementById("target");
const agent = document.createElement("p");
agent.textContent = navigator.userAgent;

const platform = document.createElement("p");
platform.textContent = navigator.platform;

const screenSize = document.createElement("p");
screenSize.textContent = `Screen: Width=${screen.width}, Height=${screen.height}`;

const viewport = document.createElement("p");
viewport.textContent = `Viewport: Width=${innerWidth}, Height=${innerHeight}`;

const now = new Date(Date.now());
const date = now.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" });
const time = now.toLocaleTimeString("fi-FI",{hour:"2-digit",minute:"2-digit"})
const dateP = document.createElement("p");
const timeP = document.createElement("p");
dateP.textContent = date;
timeP.textContent = time;


target.appendChild(agent);
target.appendChild(platform);
target.appendChild(screenSize);
target.appendChild(viewport);
target.appendChild(dateP);
target.appendChild(timeP);

