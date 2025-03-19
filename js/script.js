"use strict";

let sun = document.querySelector('.sun');
let scene = document.querySelector('.scene');

sun.addEventListener('click', function() {
scene.classList.toggle('night');
});   