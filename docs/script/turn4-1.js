import { dot } from './dot4-1.js'
for(let i=0;i<10;i++){d3.select(`#graph${i}`).graphviz().fade(false).renderDot(dot.description[i].join(''));}