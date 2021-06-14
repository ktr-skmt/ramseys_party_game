import { dot as dot0 } from './dot0.js'
import { dot as dot1 } from './dot1.js'
import { dot as dot2 } from './dot2.js'
import { dot as dot3 } from './dot3.js'
import { dot as dot4_1 } from './dot4-1.js'
import { dot as dot4_2 } from './dot4-2.js'
import { dot as dot4_3 } from './dot4-3.js'
import { dot as dot5_1 } from './dot5-1.js'
import { dot as dot5_2 } from './dot5-2.js'
import { dot as dot5_3 } from './dot5-3.js'
import { dot as dot5_4 } from './dot5-4.js'
import { dot as dot6_1 } from './dot6-1.js'
import { dot as dot7_1 } from './dot7-1.js'
import { dot as dot8_1 } from './dot8-1.js'
import { dot as dot9_1 } from './dot9-1.js'
import { dot as dot10_1 } from './dot10-1.js'
import { dot as dot11_1 } from './dot11-1.js'
import { dot as dot12_1 } from './dot12-1.js'
import { dot as dot13_1 } from './dot13-1.js'
import { dot as dot14_1 } from './dot14-1.js'

const turn0 = []
const turn1 = []
const turn2 = []
const turn3 = []
const turn4 = []
const turn5 = []
const turn6 = []
const turn7 = []
const turn8 = []
const turn9 = []
const turn10 = []
const turn11 = []
const turn12 = []
const turn13 = []
const turn14 = []

dot0.description.forEach( element => turn0.push(element) )
dot1.description.forEach( element => turn1.push(element) )
dot2.description.forEach( element => turn2.push(element) )
dot3.description.forEach( element => turn3.push(element) )
dot4_1.description.forEach( element => turn4.push(element) )
dot4_2.description.forEach( element => turn4.push(element) )
dot4_3.description.forEach( element => turn4.push(element) )
dot5_1.description.forEach( element => turn5.push(element) )
dot5_2.description.forEach( element => turn5.push(element) )
dot5_3.description.forEach( element => turn5.push(element) )
dot5_4.description.forEach( element => turn5.push(element) )
dot6_1.description.forEach( element => turn6.push(element) )
dot7_1.description.forEach( element => turn7.push(element) )
dot8_1.description.forEach( element => turn8.push(element) )
dot9_1.description.forEach( element => turn9.push(element) )
dot10_1.description.forEach( element => turn10.push(element) )
dot11_1.description.forEach( element => turn11.push(element) )
dot12_1.description.forEach( element => turn12.push(element) )
dot13_1.description.forEach( element => turn13.push(element) )
dot14_1.description.forEach( element => turn14.push(element) )

const dotGraph = [
  turn0,
  turn1,
  turn2,
  turn3,
  turn4,
  turn5,
  turn6,
  turn7,
  turn8,
  turn9,
  turn10,
  turn11,
  turn12,
  turn13,
  turn14
]

const transform = () => {
  const svg = document.getElementById("graph").getElementsByTagName("svg")[0]
  const g = svg.childNodes[1]
  const tfm = svg.createSVGTransform()
  tfm.setTranslate(25.4, 214)
  g.transform.baseVal.removeItem(2)
  g.transform.baseVal.appendItem(tfm)
}

export const showModal = (turn, i) => {
  d3.graphviz("#graph").zoom(false).fade(false).renderDot(dotGraph[turn][i - 1].join(''), transform)
  MicroModal.show('modal-graph')
}