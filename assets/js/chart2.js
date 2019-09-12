var options2 = {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['RECKITTBEN', 'BERGERPBL', 'GLAXOSMITH', 'ACI', 'EXIMBANK'],
    series: [44, 55, 13, 43, 22],
    responsive: [{
        breakpoint: 480,
        options2: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
}

var chart2 = new ApexCharts(
    document.querySelector("#chart2"),
    options2
);

chart2.render();