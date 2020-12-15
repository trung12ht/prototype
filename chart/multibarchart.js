var createMultiBarChart = function() { 
  var ctx = document.getElementById("multibarchart").getContext("2d");

  var data = {
    labels: ["Tay trái", "Tay phải", "Tổng hợp"],
    datasets: [
        {
            label: "Gõ âm đầu",
            backgroundColor: "blue",
            data: [30,70,40]
        },
        {
            label: "Gõ âm chính",
            backgroundColor: "red",
            data: [40,30,50]
        },
        {
            label: "Gõ âm cuối",
            backgroundColor: "green",
            data: [70,20,60],
        },
        {
          label: "Gõ số",
          backgroundColor: "pink",
          data: [40,50,40]
        }
    ]
  };

  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 5,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Độ chính xác',
                  fontSize: 25
                }
            }]
        },
        title: {
          display: true,
          text: "Thống kê theo tay gõ",
          fontSize: 30
        },
        responsive: true,
    }
  });
}