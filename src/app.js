/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const suit = ["♥", "♣", "♦", "♠"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generateRandomCard() {
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const suitColor =
    randomSuit === "♥" || randomSuit === "♦" ? "text-danger" : "text-black";
  return `
    <div class=" card-font align-self-start ${suitColor}">${randomSuit}</div>
    <div class="card-font fw-bold">${randomNumber}</div>
    <div class="rotated card-font align-self-end ${suitColor}">${randomSuit}</div>
  `;
}
function generateCard() {
  const card = document.getElementById("card");
  card.innerHTML = generateRandomCard();
}
window.onload = generateCard();
