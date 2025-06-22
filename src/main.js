import './main.scss'
import  {Counter} from './scripts/counter.js';
import {gsap} from 'gsap';

window.addEventListener('DOMContentLoaded', function() {
  let carlsCounter = new Counter();

  console.log(carlsCounter);
  gsap.to(".foo", { x: 200 });
})
