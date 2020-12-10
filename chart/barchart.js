var createBarChart1 = function () {
  new Chart(document.getElementById("barchart1"), {
    type: "horizontalBar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Từ / Phút",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Gõ âm đầu',
        fontSize: '18',
        fontWeight: 'bold',
        fontColor: '#00008B'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          },
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bài',
            fontSize: 15
          }
        }]
      }
    },
  });
};
var createBarChart2 = function () {
  new Chart(document.getElementById("barchart2"), {
    type: "horizontalBar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Từ / Phút",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Gõ âm chính',
        fontSize: '18',
        fontWeight: 'bold',
        fontColor: '#00008B'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          },
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bài',
            fontSize: 15
          }
        }]
      }
    },
  });
};
var createBarChart3 = function () {
  new Chart(document.getElementById("barchart3"), {
    type: "horizontalBar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Từ / Phút",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Gõ âm cuối',
        fontSize: '18',
        fontWeight: 'bold',
        fontColor: '#00008B'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          },
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bài',
            fontSize: 15
          }
        }]
      }
    },
  });
};
var createBarChart4 = function () {
  new Chart(document.getElementById("barchart4"), {
    type: "horizontalBar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Từ / Phút",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Gõ số',
        fontSize: '18',
        fontWeight: 'bold',
        fontColor: '#00008B'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          },
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bài',
            fontSize: 15
          }
        }]
      }
    },
  });
};
