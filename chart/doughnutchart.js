var createDoughnutChart1 = function () {
  var chart = new CanvasJS.Chart("pieChartAmDau", {
    animationEnabled: true,
    title:{
      text: "Gõ âm đầu",
      horizontalAlign: "center",
      fontSize: '18',
      fontColor: "#00008B"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 100,
      indexLabelFontSize: 17,
      indexLabel: "{label} - {y}",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 35, label: "Đã đạt" },
        { y: 60, label: "Chưa đạt" },
      ]
    }]
  });
  chart.render();
}
var createDoughnutChart2 = function () {
  var chart = new CanvasJS.Chart("pieChartAmChinh", {
    animationEnabled: true,
    title:{
      text: "Gõ âm chính",
      horizontalAlign: "center",
      fontSize: '18',
      fontColor: "#00008B"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 100,
      indexLabelFontSize: 17,
      indexLabel: "{label} - {y}",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 27, label: "Đã đạt" },
        { y: 68, label: "Chưa đạt" },
      ]
    }]
  });
  chart.render();
}
var createDoughnutChart3 = function () {
  var chart = new CanvasJS.Chart("pieChartAmCuoi", {
    animationEnabled: true,
    title:{
      text: "Gõ âm cuối",
      horizontalAlign: "center",
      fontSize: '18',
      fontColor: "#00008B"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 100,
      indexLabelFontSize: 17,
      indexLabel: "{label} - {y}",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 30, label: "Đã đạt" },
        { y: 65, label: "Chưa đạt" },
      ]
    }]
  });
  chart.render();
}
var createDoughnutChart4 = function () {
  var chart = new CanvasJS.Chart("pieChartSo", {
    animationEnabled: true,
    title:{
      text: "Gõ số",
      horizontalAlign: "center",
      fontSize: '18',
      fontColor: "#00008B"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 100,
      indexLabelFontSize: 17,
      indexLabel: "{label} - {y}",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 40, label: "Đã đạt" },
        { y: 55, label: "Chưa đạt" },
      ]
    }]
  });
  chart.render();
}