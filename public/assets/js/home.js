const exampleBtn = document.getElementById("exampleBtn");

function getData() {
  // const searchParams = new URLSearchParams(
  //   document.location.search.substring(1)
  // );
  const paramVar = searchParams.get("id");

  fetch(`/api/example/${paramVar}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log("Response error");
        throw new Error({ message: "getData response error" });
      }

      return response.json();
    })
    // .then(callbackFunction)
    .catch((err) => {
      console.log(err);
      alert("Fetch error");
    });
}

exampleBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Click occurred");
  // add call to getData
});

getPizza();
