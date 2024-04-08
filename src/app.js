/* eslint-disable */
import 'bootstrap';
import './style.css';

window.onload = function () {
  RandomCard();
};

function RandomCard() {
  let suits = ['♥', '♣', '♦', '♠'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let indexSuits = suits[Math.floor(Math.random() * suits.length)];
  let indexNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  // To show suits and numbers
  document.querySelector('#top').innerHTML = [indexSuits]
  document.querySelector('#end').innerHTML = [indexSuits]
  document.querySelector('#number').innerHTML = [indexNumbers]
  // To show proper color
  let newColor = indexSuits === '♥' || indexSuits === '♦' ? 'text-danger' : 'text-dark';
  document.querySelector('#top').className = newColor;
  document.querySelector('#end').className = newColor;
  document.querySelector('#number').className = newColor;
}
//Autorefresh
setInterval(() => RandomCard(), 5000)
//Refresh button
document.querySelector('#newCard').addEventListener('click', () => RandomCard())

