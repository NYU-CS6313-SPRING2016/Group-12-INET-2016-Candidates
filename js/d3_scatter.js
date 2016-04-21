nv.addGraph(function() {
  var chart = nv.models.scatterChart()
                .showDistX(true)
                .showDistY(true)
                .color(d3.scale.category10().range());

  chart.xAxis.tickFormat(d3.format('.02f'));
  chart.yAxis.tickFormat(d3.format('.02f'));
  chart.yAxis.axisLabel('Polarity');
  chart.xAxis.axisLabel('Subjectivity');

  d3.select('#chart svg')
      .datum(newdata)
      .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

function data(groups, points) {
  var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
      , y: random()
      , size: Math.random()
      //, shape: shapes[j % 6]
      });
    }
  }

  return data;
}

var newdata = [{"key": "Bernie Sanders","values": 
[{"y": -0.02, "x": 0.13, "size": 0.6},
{"y": 0.41, "x": 0.53, "size": 0.6},
{"y": 0.09, "x": 0.12, "size": 0.6}, 
{"y": -0.42, "x": 0.44, "size": 0.6}, 
{"y": 0.19, "x": 0.32, "size": 0.6}, 
{"y": -0.32, "x": 0.61, "size": 0.6}, 
{"y": -0.49, "x": 0.32, "size": 0.6}, 
{"y": -0.03, "x": 0.53, "size": 0.6}, 
{"y": 0.39, "x": 0.28, "size": 0.6}, 
{"y": -0.82, "x": 0.75, "size": 0.6}, 
{"y": 0.23, "x": 0.24, "size": 0.6}, 
{"y": -0.13, "x": 0.18, "size": 0.6}, 
{"y": 0.12, "x": 0.23, "size": 0.6}, 
{"y": 0.29, "x": 0.12, "size": 0.6}, 
{"y": 0.63, "x": 0.34, "size": 0.6}]}, 
{"key": "Donald Trump","values": 
[{"y": 0.28, "x": 0.36, "size": 0.6}, 
{"y": 0.41, "x": 0.57, "size": 0.6}, 
{"y": 0.02, "x": 0.03, "size": 0.6}, 
{"y": -0.41, "x": 0.45, "size": 0.6}, 
{"y": 0.03, "x": 0.02, "size": 0.6}, 
{"y": -0.43, "x": 0.61, "size": 0.6}, 
{"y": 0.48, "x": 0.63, "size": 0.6}, 
{"y": 0.03, "x": 0.53, "size": 0.6}, 
{"y": 0.21, "x": 0.89, "size": 0.6}, 
{"y": 0.58, "x": 0.75, "size": 0.6}, 
{"y": 0.76, "x": 0.32, "size": 0.6}, 
{"y": -0.13, "x": 0.18, "size": 0.6}, 
{"y": 0.14, "x": 0.82, "size": 0.6}, 
{"y": 0.32, "x": 0.10, "size": 0.6},
{"y": 0.62, "x": 0.25, "size": 0.6}]},
{"key": "Hillary Clinton",
"values": 
[{"y": 0.20, "x": 0.13, "size": 0.6}, 
{"y": 0.47, "x": 0.52, "size": 0.6}, 
{"y": 0.12, "x": 0.34, "size": 0.6}, 
{"y": -0.41, "x": 0.42, "size": 0.6}, 
{"y": 0.34, "x": 0.27, "size": 0.6}, 
{"y": -0.82, "x": 0.64, "size": 0.6}, 
{"y": 0.49, "x": 0.62, "size": 0.6}, 
{"y": 0.03, "x": 0.53, "size": 0.6}, 
{"y": 0.02, "x": 0.32, "size": 0.6}, 
{"y": 0.82, "x": 0.75, "size": 0.6}, 
{"y": 0.42, "x": 0.54, "size": 0.6}, 
{"y": -0.13, "x": 0.18, "size": 0.6},
{"y": 0.20, "x": 0.50, "size": 0.6}, 
{"y": 0.23, "x": 0.45, "size": 0.6}, 
{"y": 0.12, "x": 0.53, "size": 0.6}]}]