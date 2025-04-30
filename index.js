/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// setting up random object
function freelanceObject() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}

const freelancer = freelanceObject();
console.log(freelancer);

// freelancer array
const freelancers = Array.from({ length: NUM_FREELANCERS }, freelanceObject);
console.log(freelancers);

// average rate
function averageRate(freelancers) {
  let total = 0;

  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  return total / freelancers.length;
}
// render //

function tableRow({ name, occupation, rate }) {
  const row = document.createElement("tr");
  row.innerHTML = `
 <tr>
      <th scope="row">${name}</th>
      <td>${occupation}</td>
      <td>${rate}</td>
    </tr>`;
  return row;
}

function tableRows() {
  const tbody = document.createElement("tbody");
  const freelancerElements = freelancers.map(tableRow);
  tbody.replaceChildren(...freelancerElements);
  return tbody;
}
const avgRate = averageRate(freelancers);
console.log(avgRate);

// Render

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <p>Average hourly rate: $${avgRate}</p>
  <table>
  <thead>
  <tr>
  <th scope="col">Name</th>
  <th scope="col">Occupation</th>
  <th scope="col">Rate</th>
  </tr>
  </thead>
  <tbody id="rows">
  
  </tbody>
  </table>`;
  $app.querySelector("#rows").replaceWith(tableRows());
}
render();
