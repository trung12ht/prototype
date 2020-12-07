const fTitle = "Học mỗi ngày";
const fXLabel = "Số bài tập";
const fData = [        
  { x: new Date(2019, 11, 1), y: 6, markerType: "triangle",  markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 2), y: 7, markerType: "triangle",  markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 3) , y: 5, markerType: "cross", markerColor: "tomato" },
  { x: new Date(2019, 11, 4) , y: 5, markerType: "cross", markerColor: "tomato" },
  { x: new Date(2019, 11, 5) , y: 6, markerType: "triangle", markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 6) , y: 8, markerType: "triangle", markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 7) , y: 6, markerType: "cross", markerColor: "tomato" },
  { x: new Date(2019, 11, 8) , y: 2, markerType: "cross", markerColor: "tomato" },
  { x: new Date(2019, 11, 9) , y: 8, markerType: "triangle", markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 10) , y: 4, markerType: "cross", markerColor: "tomato" },
  { x: new Date(2019, 11, 11) , y: 9, markerType: "triangle", markerColor: "#6B8E23" },
  { x: new Date(2019, 11, 12) , y: 6, markerType: "cross", markerColor: "tomato" }
];
const fFormatDataY = "#0";
const fFormatDataX = "DD, MMM";
const fFormatAxisY = "#0";
const fFormatAxisX = "DD-MMM";

var createLineChart = function() {
  var chart = new CanvasJS.Chart("lineChart", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    title:{
      text: fTitle,
      fontFamilty: "arial",
      // fontColor: "#56ffff"
    },
    axisX: {
      interval: 1,
      valueFormatString: fFormatAxisX
    },
    axisY:{
      title: fXLabel,
      includeZero: true,
      valueFormatString: fFormatAxisY
    },
    data: [{        
      type: "line",
      markerSize: 5,
      xValueFormatString: fFormatDataX,
      yValueFormatString: fFormatDataY,
      dataPoints: fData
    }]
  });
  chart.render();
}