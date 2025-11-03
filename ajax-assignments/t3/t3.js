async function brokenRequest() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/34", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    if(response.status != 200){
      console.log("Request not successful");
      return;
    }

    const jsonresp = await response.json();

    console.log(jsonresp.data);
  } catch (error) {
    console.log("Error:", error);
  }
}

brokenRequest();
