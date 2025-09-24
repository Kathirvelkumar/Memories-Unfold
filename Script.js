// Using const for elements as a modern best practice
const taskList = document.getElementById("taskList");
const container = document.querySelector(".container");
const inputDistrictName = document.getElementById(
  "creation-popup-districtname"
);
const inputPlaceName = document.getElementById("creation-popup-placename");
const inputDate = document.getElementById("creation-popup-date");
const inputTransport = document.getElementById("creation-popup-transport");
const inputShortStory = document.getElementById("creation-popup-shortstory");
const creationPopup = document.querySelector(".creation-popup");
const overlay = document.querySelector(".overlay");
const addButton = document.getElementById("add-button");
const addPopupButton = document.getElementById("add-popup");
const removePopupButton = document.getElementById("remove-popup");

// Event listener to open the pop-up
addButton.addEventListener("click", function () {
  creationPopup.style.display = "block";
  overlay.style.display = "block";
});

// Function to safely create and add a new memory card
function createMemoryCard() {
  // Basic validation to prevent adding empty cards
  if (
    !inputDistrictName.value ||
    !inputPlaceName.value ||
    !inputShortStory.value
  ) {
    alert("Please fill in all the details.");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "TravelContainer");

  // Use createElement and createTextNode for security
  const h2 = document.createElement("h2");
  h2.textContent = inputDistrictName.value;
  newDiv.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = inputPlaceName.value;
  newDiv.appendChild(h3);

  // Add date and transport
  const h4_date = document.createElement("h4");
  h4_date.textContent = inputDate.value;
  newDiv.appendChild(h4_date);

  const h4_transport = document.createElement("h4");
  h4_transport.textContent = inputTransport.value;
  newDiv.appendChild(h4_transport);

  const p = document.createElement("p");
  p.textContent = inputShortStory.value;
  newDiv.appendChild(p);

  const closeButton = document.createElement("button");
  closeButton.setAttribute("class", "close-button");
  closeButton.textContent = "CLOSE";

  // Attach event listener directly to the new button
  closeButton.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newDiv.appendChild(closeButton);
  container.appendChild(newDiv);

  // Clear the form and hide the popup
  creationPopup.querySelector("form").reset();
  creationPopup.style.display = "none";
  overlay.style.display = "none";
}

// Event listener for the "ADD" button
addPopupButton.addEventListener("click", function (event) {
  event.preventDefault(); // Stop form submission and page reload
  createMemoryCard();
});

// Event listener for the "REMOVE" button to close the popup
removePopupButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent button from submitting the form
  creationPopup.style.display = "none";
  overlay.style.display = "none";
});

// The old closebutton function is no longer needed since the event listener is added dynamically.
