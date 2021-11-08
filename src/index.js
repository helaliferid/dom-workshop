import {f} from "./lib/dom.wk";
import {render} from "./lib/render"

console.log(f('mean'));

const output = document.querySelector('#output');
const left = document.querySelector('#left');

render(left,{name:'Salah',gender:'Male'},'black','yellow');


