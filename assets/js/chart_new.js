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
          y: 300.33
        },
        {
          x: "02-01-2019 GMT",
          y: 298.5
        },
        {
          x: "03-01-2019 GMT",
          y: 297.1
        },
        {
          x: "04-01-2019 GMT",
          y: 304.21
        },
        {
          x: "05-01-2019 GMT",
          y: 309.8
        },
        {
          x: "06-01-2019 GMT",
          y: 315
        },
        {
          x: "07-01-2019 GMT",
          y: 311.4
        },
        {
          x: "08-01-2019 GMT",
          y: 308.11
        },
        {
          x: "09-01-2019 GMT",
          y: 306.8
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
