import './main.scss'
import  {Counter} from './scripts/counter.js';
import {gsap} from 'gsap';

window.addEventListener('DOMContentLoaded', function() {

  const config = {
    root: document.querySelector('.counter'),
    buttons: document.getElementsByTagName('button'),
    min: 0,
    max: 40
  }

  let carlsCounter = new Counter(config);
  carlsCounter.init();

  console.log(carlsCounter);

  gsap.to(".foo", { x: 200 });
})
