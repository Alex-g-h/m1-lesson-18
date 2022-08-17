import "../index.css";
import JS_IMAGE from '../assets/javscript.png'

const headerHTML = document.createElement('h1');
headerHTML.textContent = 'I love JavaScript';

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(headerHTML);
document.body.append(jsImageHTML);