const $backBtn = document.querySelector("#back-btn");

let pizzaId;

function getPizza() {
  // get id of pizza
  const searchParams = new URLSearchParams(
    document.location.search.substring(1)
  );
  const pizzaId = searchParams.get("id");

  // get pizzaInfo
  fetch(`/api/pizzas/${pizzaId}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log("hi");
        throw new Error({ message: "Something went wrong!" });
      }

      return response.json();
    })
    .then(printPizza)
    .catch((err) => {
      console.log(err);
      alert("Cannot find a pizza with this id! Taking you back.");
      window.history.back();
    });
}

$newCommentForm.addEventListener("submit", handleNewCommentSubmit);
$commentSection.addEventListener("submit", handleNewReplySubmit);

getPizza();
