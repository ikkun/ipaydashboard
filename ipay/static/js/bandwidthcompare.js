function bandwidthcompare(cat,vthai,vinter){
    Highcharts.chart('container-bandwidthcompare', {
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Bandwidth Summary'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: cat
        },
        yAxis: {
            title: {
                text: 'mb/s'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Thailand',
            data: vthai
        }, {
            name: 'International',
            data: vinter
        }]
    });
}