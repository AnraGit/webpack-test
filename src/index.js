import App from "./App";
import style from "./main.css";
import './scss/base.scss';


const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

console.log('I´m a silly entry point');