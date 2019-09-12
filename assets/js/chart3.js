var options3 = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ['#3A5794', '#A5C351', '#E14A84'],
    series: [{
      name: 'GLAXOSMITH',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'ACI',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'EXIMBANK',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
      opacity: [0.85,0.25,1],
              gradient: {
                  inverseColors: false,
                  shade: 'light',
                  type: "vertical",
                  opacityFrom: 0.85,
                  opacityTo: 0.55,
                  stops: [0, 100, 100, 100]
              }
    },
    labels: ['01/01/2019', '02/01/2019','03/01/2019','04/01/2019','05/01/2019','06/01/2019','07/01/2019','08/01/2019','09/01/2019'],
    markers: {
      size: 0
    },
    xaxis: {
      type:'datetime'
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + " views";
          }
          return y;
          
        }
      }
    },
    legend: {
      labels: {
        useSeriesColors: true
      },
      markers: {
        customHTML: [
          function() {
            return '<span></span>'
          }, function() {
            return '<span></span>'
          }, function() {
            return '<span></span>'
          }
        ]
      }
    }
  }

  var chart3 = new ApexCharts(
    document.querySelector("#chart3"),
    options3
  );

  chart3.render();
