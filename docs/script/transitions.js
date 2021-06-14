import { focus } from './focus.js'

export const transition = () =>
  d3.select('#transitions').graphviz().fade(false).renderDot(dot.description[0].join(''), focus)