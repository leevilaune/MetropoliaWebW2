async function createUser() {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        job: "Developer",
      }),
      headers: {
        'x-api-key': 'reqres-free-v1',
    },
    });

    const data = await response.json();

    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createUser();