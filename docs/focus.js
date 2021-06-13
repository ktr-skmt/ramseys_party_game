const colorEdges = () => {
  const regexEdge = /"([0-9]+-[0-9]+)"\s->\s"([0-9]+-[0-9]+)+"/;
  const regexNode = /^("[0-9]+-[0-9]+";)+$/;
  const regexNodeName = /"([0-9]+-[0-9]+)";/g;
  const edges = [];
  const nodes = [];
  const emphasized = "emphasized"
  dot['description'].forEach( element => {
    element.map( line => regexEdge.exec(line.trim()) )
      .filter( matcher => matcher != null)
      .forEach( matcher => edges.push(matcher) )
    element.map( line => regexNode.exec(line.trim()))
      .filter( matcher => matcher != null)
      .forEach( matcher => {
        while ((m = regexNodeName.exec(matcher[0])) != null) {
          nodes.push(m[1])
        }
      }
    )
  })
  const nodeElement = (node) => document.getElementById("node" + (nodes.indexOf(node) + 1))
  const coloring = (node) => {
    nodeElement(node)
      .classList.add(emphasized)
    edges.filter( matcher => matcher[1] == node || matcher[2] == node )
      .map( t => edges.indexOf(t) )
      .map( index => index + 1 )
      .map( i => "edge" + i )
      .map( id => document.getElementById(id) )
      .forEach( edge => edge.classList.add(emphasized))
  }
  const refresh = () => {
    Array.from(document.getElementsByClassName(emphasized))
      .forEach( element =>
        element.classList.remove(emphasized)
      )
  }
  nodes.forEach( node =>
    nodeElement(node).addEventListener("mouseover", () => {
      refresh()
      coloring(node)
    }, false)
  )
}