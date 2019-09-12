var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "area",
    animations: {
      initialAnimation: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Series 1",
      data: [
        {
          x: "01-01-2019 GMT",
          y: 700.33
        },
        {
          x: "02-01-2019 GMT",
          y: 705.5
        },
        {
          x: "03-01-2019 GMT",
          y: 698.87
        },
        {
          x: "04-01-2019 GMT",
          y: 704.21
        },
        {
          x: "05-01-2019 GMT",
          y: 709.8
        },
        {
          x: "06-01-2019 GMT",
          y: 724.21
        },
        {
          x: "07-01-2019 GMT",
          y: 711.4
        },
        {
          x: "08-01-2019 GMT",
          y: 708.11
        },
        {
          x: "09-01-2019 GMT",
          y: 706.8
        }
      ]
    }
  ],
  xaxis: {
    type: "datetime"
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
