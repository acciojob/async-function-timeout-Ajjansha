//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// helper function to create delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener("click", async (e) => {
  e.preventDefault(); // prevent form submission

  const message = textInput.value;
  const delay = Number(delayInput.value);

  // wait for the specified delay
  await wait(delay);

  // display the message
  outputDiv.textContent = message;
});