const dot = {
  'description': [
    [
      'digraph graph_name {',
      '  graph [',
      '    charset = "UTF-8";',
      '    label = "K6 - Transitions",',
      '    labelloc = "t",',
      '    labeljust = "c",',
      '    bgcolor = "#f0f0f0",',
      '    fontcolor = black,',
      '    fontsize = 18,',
      '    style = "filled",',
      '    rankdir = LR,',
      '    margin = 0.2,',
      '    splines = spline,',
      '    ranksep = 1.0,',
      '    nodesep = 0.9',
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
      '    height = 0.6,',
      '    width = 1.2',
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
      '    arrowhead = normal',
      '  ];',
      '  rankdir = LR;',
      '  {rank = same; "0-1"};',
      '  {rank = same; "1-1"};',
      '  {rank = same; "2-1";"2-2"};',
      '  {rank = same; "3-1";"3-2";"3-3";"3-4";"3-5";"3-6"};',
      '  {rank = same; "4-1";"4-2";"4-3";"4-4";"4-5";"4-6";"4-7";"4-8";"4-9";"4-10";"4-11";"4-12";"4-13";"4-14";"4-15";"4-16";"4-17";"4-18";"4-19";"4-20";"4-21";"4-22";"4-23";"4-24";"4-25"};',
      '  {rank = same; "5-1";"5-2";"5-3";"5-4";"5-5";"5-6";"5-7";"5-8";"5-9";"5-10";"5-11";"5-12";"5-13";"5-14";"5-15";"5-16";"5-17";"5-18";"5-19";"5-20";"5-21";"5-22";"5-23";"5-24";"5-25";"5-26";"5-27";"5-28";"5-29";"5-30";"5-31";"5-32";"5-33"};',
      '  {rank = same; "6-1"};',
      '  {rank = same; "7-1"};',
      '  {rank = same; "8-1"};',
      '  {rank = same; "9-1"};',
      '  {rank = same; "10-1"};',
      '  {rank = same; "11-1"};',
      '  {rank = same; "12-1"};',
      '  {rank = same; "13-1"};',
      '  {rank = same; "14-1"};',
      '  "0-1";',
      '  "1-1";',
      '  "2-1";"2-2";',
      '  "3-1";"3-2";"3-3";"3-4";"3-5";"3-6";',
      '  "4-1";"4-2";"4-3";"4-4";"4-5";"4-6";"4-7";"4-8";"4-9";"4-10";"4-11";"4-12";"4-13";"4-14";"4-15";"4-16";"4-17";"4-18";"4-19";"4-20";"4-21";"4-22";"4-23";"4-24";"4-25";',
      '  "5-1";"5-2";"5-3";"5-4";"5-5";"5-6";"5-7";"5-8";"5-9";"5-10";"5-11";"5-12";"5-13";"5-14";"5-15";"5-16";"5-17";"5-18";"5-19";"5-20";"5-21";"5-22";"5-23";"5-24";"5-25";"5-26";"5-27";"5-28";"5-29";"5-30";"5-31";"5-32";"5-33";',
      '  "6-1";',
      '  "7-1";',
      '  "8-1";',
      '  "9-1";',
      '  "10-1";',
      '  "11-1";',
      '  "12-1";',
      '  "13-1";',
      '  "14-1";',
      '  "0-1" -> "1-1" [color = red];',
      '  "1-1" -> "2-1" [color = blue];',
      '  "1-1" -> "2-2" [color = blue];',
      '  "2-1" -> "3-1" [color = red];',
      '  "2-1" -> "3-2" [color = red];',
      '  "2-1" -> "3-3" [color = red];',
      '  "2-1" -> "3-4" [color = red];',
      '  "2-1" -> "3-5" [color = red];',
      '  "2-2" -> "3-6" [color = red];',
      '  "3-1" -> "4-1" [color = blue];',
      '  "3-1" -> "4-2" [color = blue];',
      '  "3-1" -> "4-3" [color = blue];',
      '  "3-1" -> "4-4" [color = blue];',
      '  "3-1" -> "4-5" [color = blue];',
      '  "3-1" -> "4-6" [color = blue];',
      '  "3-2" -> "4-3" [color = blue];',
      '  "3-2" -> "4-7" [color = blue];',
      '  "3-2" -> "4-8" [color = blue];',
      '  "3-3" -> "4-2" [color = blue];',
      '  "3-3" -> "4-4" [color = blue];',
      '  "3-3" -> "4-7" [color = blue];',
      '  "3-3" -> "4-9" [color = blue];',
      '  "3-3" -> "4-10" [color = blue];',
      '  "3-3" -> "4-12" [color = blue];',
      '  "3-3" -> "4-13" [color = blue];',
      '  "3-3" -> "4-14" [color = blue];',
      '  "3-4" -> "4-15" [color = blue];',
      '  "3-4" -> "4-16" [color = blue];',
      '  "3-4" -> "4-17" [color = blue];',
      '  "3-4" -> "4-18" [color = blue];',
      '  "3-4" -> "4-20" [color = blue];',
      '  "3-5" -> "4-15" [color = blue];',
      '  "3-5" -> "4-18" [color = blue];',
      '  "3-5" -> "4-19" [color = blue];',
      '  "3-5" -> "4-20" [color = blue];',
      '  "3-5" -> "4-21" [color = blue];',
      '  "3-5" -> "4-22" [color = blue];',
      '  "3-5" -> "4-23" [color = blue];',
      '  "3-5" -> "4-24" [color = blue];',
      '  "3-6" -> "4-5" [color = blue];',
      '  "3-6" -> "4-6" [color = blue];',
      '  "3-6" -> "4-8" [color = blue];',
      '  "3-6" -> "4-11" [color = blue];',
      '  "3-6" -> "4-13" [color = blue];',
      '  "3-6" -> "4-25" [color = blue];',
      '  "4-1" -> "5-1" [color = red];',
      '  "4-1" -> "5-2" [color = red];',
      '  "4-1" -> "5-3" [color = red];',
      '  "4-1" -> "5-4" [color = red];',
      '  "4-1" -> "5-5" [color = red];',
      '  "4-2" -> "5-6" [color = red];',
      '  "4-2" -> "5-7" [color = red];',
      '  "4-2" -> "5-8" [color = red];',
      '  "4-2" -> "5-9" [color = red];',
      '  "4-2" -> "5-10" [color = red];',
      '  "4-2" -> "5-11" [color = red];',
      '  "4-3" -> "5-12" [color = red];',
      '  "4-3" -> "5-13" [color = red];',
      '  "4-3" -> "5-14" [color = red];',
      '  "4-3" -> "5-15" [color = red];',
      '  "4-3" -> "5-16" [color = red];',
      '  "4-4" -> "5-14" [color = red];',
      '  "4-4" -> "5-17" [color = red];',
      '  "4-4" -> "5-18" [color = red];',
      '  "4-4" -> "5-19" [color = red];',
      '  "4-4" -> "5-20" [color = red];',
      '  "4-4" -> "5-21" [color = red];',
      '  "4-4" -> "5-22" [color = red];',
      '  "4-4" -> "5-23" [color = red];',
      '  "4-4" -> "5-24" [color = red];',
      '  "4-5" -> "5-25" [color = red];',
      '  "4-5" -> "5-26" [color = red];',
      '  "4-5" -> "5-27" [color = red];',
      '  "4-5" -> "5-28" [color = red];',
      '  "4-5" -> "5-29" [color = red];',
      '  "4-5" -> "5-30" [color = red];',
      '  "4-6" -> "5-31" [color = red];',
      '  "4-6" -> "5-32" [color = red];',
      '  "4-6" -> "5-33" [color = red];',
      '  "4-7" -> "5-2" [color = red];',
      '  "4-7" -> "5-8" [color = red];',
      '  "4-7" -> "5-26" [color = red];',
      '  "4-8" -> "5-31" [color = red];',
      '  "4-9" -> "5-3" [color = red];',
      '  "4-10" -> "5-27" [color = red];',
      '  "4-11" -> "5-28" [color = red];',
      '  "4-12" -> "5-32" [color = red];',
      '  "4-13" -> "5-23" [color = red];',
      '  "4-14" -> "5-4" [color = red];',
      '  "4-14" -> "5-8" [color = red];',
      '  "4-14" -> "5-9" [color = red];',
      '  "4-15" -> "5-2" [color = red];',
      '  "4-15" -> "5-5" [color = red];',
      '  "4-15" -> "5-26" [color = red];',
      '  "4-15" -> "5-29" [color = red];',
      '  "4-16" -> "5-13" [color = red];',
      '  "4-16" -> "5-20" [color = red];',
      '  "4-17" -> "5-31" [color = red];',
      '  "4-18" -> "5-29" [color = red];',
      '  "4-19" -> "5-11" [color = red];',
      '  "4-20" -> "5-14" [color = red];',
      '  "4-20" -> "5-15" [color = red];',
      '  "4-20" -> "5-19" [color = red];',
      '  "4-20" -> "5-20" [color = red];',
      '  "4-20" -> "5-21" [color = red];',
      '  "4-20" -> "5-24" [color = red];',
      '  "4-20" -> "5-33" [color = red];',
      '  "4-21" -> "5-16" [color = red];',
      '  "4-21" -> "5-23" [color = red];',
      '  "4-22" -> "5-27" [color = red];',
      '  "4-22" -> "5-30" [color = red];',
      '  "4-23" -> "5-11" [color = red];',
      '  "4-24" -> "5-18" [color = red];',
      '  "4-24" -> "5-32" [color = red];',
      '  "5-1" -> "6-1" [color = blue];',
      '  "6-1" -> "7-1" [color = red];',
      '  "7-1" -> "8-1" [color = blue];',
      '  "8-1" -> "9-1" [color = red];',
      '  "9-1" -> "10-1" [color = blue];',
      '  "10-1" -> "11-1" [color = red];',
      '  "11-1" -> "12-1" [color = blue];',
      '  "12-1" -> "13-1" [color = red];',
      '  "13-1" -> "14-1" [color = blue];',
      '}'
    ]
  ]
}