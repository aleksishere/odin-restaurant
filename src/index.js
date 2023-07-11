import './style.css';
import { displayHome,displayMenu } from './displayHome';

let btns = Array.from(document.querySelectorAll('li'));
btns[0].addEventListener('click', displayHome);
btns[1].addEventListener('click', displayMenu);