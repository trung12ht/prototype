var createRadarChart = function() {
  new Chart(document.getElementById("radarChart"), {
    type: 'radar',
    data: {
      labels: [
        "Tỉ lệ gõ đúng cao nhất",
        "Tỉ lệ gõ đúng trung bình",
        "Điểm cao nhất",
        "Điểm trung bình",
        "Số ngày luyện tập trong 100 ngày gần đây",
      ],
      datasets: [
        {
          label: "Gõ âm đầu",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,0.2)",
          data: [70,61,51,69,65]
        },
        {
          label: "Gõ âm chính",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,0.2)",
          data: [48,54,60,57,46]
        },
        {
          label: "Gõ âm cuối",
          fill: true,
          backgroundColor: "rgba(0,255,0,0.2)",
          borderColor: "rgba(0,255,0,0.2)",
          data: [80,61,71,39,37]
        },
        {
          label: "Gõ số",
          fill: true,
          backgroundColor: "rgba(0,255,255,0.2)",
          borderColor: "rgba(0,255,255,0.2)",
          data: [58,64,30,77,75]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Kỹ năng của bạn'
      },
      scale: {
        display: true,
        min: 0,
        max: 100,
        reverse: false
      },
      responsive: true
    }
  })
}