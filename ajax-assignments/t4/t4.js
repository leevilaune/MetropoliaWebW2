async function fetchData(url, options) {
  const response = await fetch(url, options);
  console.log(response);
  if (!response.ok) {
    throw new Error("Response not ok");
  }
  const jsonBody = response.json();
  return jsonBody;
}

const user = { 
    name: "John Doe", 
    job: "Developer" };
const url = "https://reqres.in/api/users";
const options = {
  method: "POST",
  headers: {
    "x-api-ke": "reqres-free-v1",
  },
  body: JSON.stringify(user),
};

fetchData(url, options)
  .then(userData => console.log(userData))
  .catch(error => console.error("An error occurred:", error));
