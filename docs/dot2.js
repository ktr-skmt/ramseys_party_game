const dot = {
  'description': [
    [
      'digraph graph_name {',
      '  graph [',
      '    charset = "UTF-8";',
      '    label = "K6 - Turn 2-1",',
      '    labelloc = "t",',
      '    labeljust = "c",',
      '    bgcolor = "#f0f0f0",',
      '    fontcolor = black,',
      '    fontsize = 18,',
      '    style = "filled",',
      '    rankdir = TB,',
      '    margin = 0.2,',
      '    splines = spline,',
      '    ranksep = 1.0,',
      '    nodesep = 0.9',
      '    layout = neato',
      '  ];',
      '  node [',
      '    colorscheme = "greys9"',
      '    style = "solid,filled",',
      '    fontsize = 16,',
      '    fontcolor = 9,',
      '    fontname = "Migu 1M",',
      '    color = 9,',
      '    fillcolor = 1,',
      '    fixedsize = true,',
      '    height = 0.3,',
      '    width = 0.3',
      '  ];',
      '  edge [',
      '    style = solid,',
      '    fontsize = 14,',
      '    fontcolor = black,',
      '    fontname = "Migu 1M",',
      '    color = black,',
      '    labelfloat = true,',
      '    labeldistance = 2.5,',
      '    labelangle = 70',
      '    arrowhead = none',
      '  ];',
      '  rankdir = TB;',
      '  {rank = same; 1};',
      '  {rank = same; 2;6};',
      '  {rank = same; 3;5};',
      '  {rank = same; 4};',
      '  1[pos="1,1!"];',
      '  2[pos="1.866,0.5!"];',
      '  3[pos="1.866,-0.5!"];',
      '  4[pos="1,-1!"];',
      '  5[pos="0.134,-0.5!"];',
      '  6[pos="0.134,0.5!"];',
      '  1 -> 2[label = "E12", color = red, penwidth = 3];',
      '  1 -> 3[label = "E13", color = blue, penwidth = 3];',
      '  1 -> 4[label = "E14"];',
      '  1 -> 5[label = "E15"];',
      '  1 -> 6[label = "E16"];',
      '  2 -> 3[label = "E23"];',
      '  2 -> 4[label = "E24"];',
      '  2 -> 5[label = "E25"];',
      '  2 -> 6[label = "E26"];',
      '  3 -> 4[label = "E34"];',
      '  3 -> 5[label = "E35"];',
      '  3 -> 6[label = "E36"];',
      '  4 -> 5[label = "E45"];',
      '  4 -> 6[label = "E46"];',
      '  5 -> 6[label = "E56"];',
      '}'
    ],
    [
          'digraph graph_name {',
          '  graph [',
          '    charset = "UTF-8";',
          '    label = "K6 - Turn 2-2",',
          '    labelloc = "t",',
          '    labeljust = "c",',
          '    bgcolor = "#f0f0f0",',
          '    fontcolor = black,',
          '    fontsize = 18,',
          '    style = "filled",',
          '    rankdir = TB,',
          '    margin = 0.2,',
          '    splines = spline,',
          '    ranksep = 1.0,',
          '    nodesep = 0.9',
          '    layout = neato',
          '  ];',
          '  node [',
          '    colorscheme = "greys9"',
          '    style = "solid,filled",',
          '    fontsize = 16,',
          '    fontcolor = 9,',
          '    fontname = "Migu 1M",',
          '    color = 9,',
          '    fillcolor = 1,',
          '    fixedsize = true,',
          '    height = 0.3,',
          '    width = 0.3',
          '  ];',
          '  edge [',
          '    style = solid,',
          '    fontsize = 14,',
          '    fontcolor = black,',
          '    fontname = "Migu 1M",',
          '    color = black,',
          '    labelfloat = true,',
          '    labeldistance = 2.5,',
          '    labelangle = 70',
          '    arrowhead = none',
          '  ];',
          '  rankdir = TB;',
          '  {rank = same; 1};',
          '  {rank = same; 2;6};',
          '  {rank = same; 3;5};',
          '  {rank = same; 4};',
          '  1[pos="1,1!"];',
          '  2[pos="1.866,0.5!"];',
          '  3[pos="1.866,-0.5!"];',
          '  4[pos="1,-1!"];',
          '  5[pos="0.134,-0.5!"];',
          '  6[pos="0.134,0.5!"];',
          '  1 -> 2[label = "E12", color = red, penwidth = 3];',
          '  1 -> 3[label = "E13"];',
          '  1 -> 4[label = "E14"];',
          '  1 -> 5[label = "E15"];',
          '  1 -> 6[label = "E16"];',
          '  2 -> 3[label = "E23"];',
          '  2 -> 4[label = "E24"];',
          '  2 -> 5[label = "E25"];',
          '  2 -> 6[label = "E26"];',
          '  3 -> 4[label = "E34", color = blue, penwidth = 3];',
          '  3 -> 5[label = "E35"];',
          '  3 -> 6[label = "E36"];',
          '  4 -> 5[label = "E45"];',
          '  4 -> 6[label = "E46"];',
          '  5 -> 6[label = "E56"];',
          '}'
        ]
  ]
}