    var options = {
      annotations: {
        yaxis: [{
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
        xaxis: [{
          x: new Date('12 Sep 2019').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
            text: 'Rally',
            style: {
              color: "#fff",
              background: '#775DD0'
            }
          }
        }]
      },
      chart: {
        type: 'area',
        height: 350,
      },
      dataLabels: {
        enabled: false
      },
      series: [{
          data: [
               
                   {
          x: "01-01-2018 GMT",
          y: 370.24
        },
        {
          x: "01-10-2018 GMT",
          y: 378.82
        },
        {
          x: "01-20-2018 GMT",
          y: 372.23
        },
       
         {
          x: "02-01-2018 GMT",
          y: 380.82
        },
        {
          x: "02-10-2018 GMT",
          y: 387.22
        },
        {
          x: "02-20-2018 GMT",
          y: 385.32
        },
      
         
          {
          x: "03-01-2018 GMT",
          y: 369.64
        },
        {
          x: "03-10-2018 GMT",
          y: 362.21
        },
        {
          x: "03-20-2018 GMT",
          y: 357.66
        },
    
         {
          x: "04-01-2018 GMT",
          y: 351.12
        },
        {
          x: "04-10-2018 GMT",
          y: 348.91
        },
        {
          x: "04-20-2018 GMT",
          y: 352.56
        },
       

         {
          x: "05-01-2018 GMT",
          y: 378.23
        },
        {
          x: "05-10-2018 GMT",
          y: 365.89
        },
        {
          x: "05-20-2018 GMT",
          y: 361.65
        },
       
         {
          x: "06-01-2018 GMT",
          y: 348.59
        },
        {
          x: "06-10-2018 GMT",
          y: 354.13
        },
        {
          x: "06-20-2018 GMT",
          y: 343.37
        },
       

         {
          x: "07-01-2018 GMT",
          y: 333.26
        },
        {
          x: "07-10-2018 GMT",
          y: 327.18
        },
        {
          x: "07-20-2018 GMT",
          y: 332.58
        },
      

         {
          x: "08-01-2018 GMT",
          y: 315.72
        },
        {
          x: "08-10-2018 GMT",
          y: 333.89
        },
        {
          x: "08-20-2018 GMT",
          y: 336.89
        },
    
         {
          x: "09-01-2018 GMT",
          y: 347.41
        },
        {
          x: "09-10-2018 GMT",
          y: 350.28
        },

            {
          x: "09-20-2018 GMT",
          y: 370.24
        },
    
        {
          x: "10-01-2018 GMT",
          y: 347.41
        },
        {
          x: "10-10-2018 GMT",
          y: 350.28
        },
        {
          x: "10-20-2018 GMT",
          y: 372.23
        },
        

        {
           x: "10-01-2018 GMT",
          y: 347.41
        },
        {
          x: "10-10-2018 GMT",
          y: 350.28
        },
        {
          x: "10-20-2018 GMT",
          y: 372.23
        },
     
      
    


            {
          x: "01-01-2019 GMT",
          y: 370.24
        },
        {
          x: "01-10-2019 GMT",
          y: 378.82
        },
        {
          x: "01-20-2019 GMT",
          y: 372.23
        },
    


         {
          x: "02-01-2019 GMT",
          y: 380.82
        },
        {
          x: "02-10-2019 GMT",
          y: 387.22
        },
        {
          x: "02-20-2019 GMT",
          y: 385.32
        },
    
         
          {
          x: "03-01-2019 GMT",
          y: 369.64
        },
        {
          x: "03-10-2019 GMT",
          y: 362.21
        },
        {
          x: "03-20-2019 GMT",
          y: 357.66
        },
      
         {
          x: "04-01-2019 GMT",
          y: 351.12
        }, 

        {
          x: "04-10-2019 GMT",
          y: 348.91
        },
        {
          x: "04-20-2019 GMT",
          y: 352.56
        },
      

         {
          x: "05-01-2019 GMT",
          y: 378.23
        },
        {
          x: "05-10-2019 GMT",
          y: 365.89
        },
        {
          x: "05-20-2019 GMT",
          y: 361.65
        },
     
         {
          x: "06-01-2019 GMT",
          y: 348.59
        },
        {
          x: "06-10-2019 GMT",
          y: 354.13
        },
        {
          x: "06-20-2019 GMT",
          y: 343.37
        },
      

         {
          x: "07-01-2019 GMT",
          y: 333.26
        },
        {
          x: "07-10-2019 GMT",
          y: 327.18
        },
        {
          x: "07-20-2019 GMT",
          y: 332.58
        },
      

         {
          x: "08-01-2019 GMT",
          y: 315.72
        },
        {
          x: "08-10-2019 GMT",
          y: 333.89
        },
        {
          x: "08-20-2019 GMT",
          y: 336.89
        },
      
         {
          x: "09-01-2019 GMT",
          y: 347.41
        },
        {
          x: "09-10-2019 GMT",
          y: 350.28
        },
      
          ]
        },

      ],
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Jan 2018').getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },

    }

    var chart = new ApexCharts(
      document.querySelector("#timeline-chart"),
      options
    );

    chart.render();

    var resetCssClasses = function (activeEl) {
      var els = document.querySelectorAll("button");
      Array.prototype.forEach.call(els, function (el) {
        el.classList.remove('active');
      });

      activeEl.target.classList.add('active')
    }

    document.querySelector("#one_month").addEventListener('click', function (e) {
      resetCssClasses(e)
      chart.updateOptions({
        xaxis: {
          min: new Date('12 Aug 2019').getTime(),
          max: new Date('11 Sep 2019').getTime(),
        }
      })
    })

    document.querySelector("#six_months").addEventListener('click', function (e) {
      resetCssClasses(e)
      chart.updateOptions({
        xaxis: {
          min: new Date('12 Mar 2019').getTime(),
          max: new Date('11 Sep 2019').getTime(),
        }
      })
    })

    document.querySelector("#one_year").addEventListener('click', function (e) {
      resetCssClasses(e)
      chart.updateOptions({
        xaxis: {
          min: new Date('11 Sep 2018').getTime(),
         max: new Date('11 Sep 2019').getTime(),
        }
      })
    })

    document.querySelector("#ytd").addEventListener('click', function (e) {
      resetCssClasses(e)
      chart.updateOptions({
        xaxis: {
          min: new Date('01 Jan 2019').getTime(),
         max: new Date('11 Sep 2019').getTime(),
        }
      })
    })

    document.querySelector("#all").addEventListener('click', function (e) {
      resetCssClasses(e)
      chart.updateOptions({
        xaxis: {
          min: undefined,
          max: undefined,
        }
      })
    })

    document.querySelector("#ytd").addEventListener('click', function () {

    })
