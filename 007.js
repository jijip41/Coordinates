'use strict'

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const text = document.querySelector('.text');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;


window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  text.innerHTML = `${x}, ${y}`;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  text.style.transform = `translate(${x + 30}px, ${y + 15}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;

})

