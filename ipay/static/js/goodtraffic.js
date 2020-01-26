//Good Traffic   
function goodtraffic(traffic){
	
    var gaugeOptions = {
      chart: {
          type: 'solidgauge'
      },    
      title: null,    
      pane: {
        center: ['50%', '80%'],
        size: '140%',
          startAngle: -90,
          endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
      },
  
      tooltip: {
        enabled: false
      },
         
      // the value axis
      yAxis: {
      stops: [
            [0.1, '#DF5353'], // green
            [0.8, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'] // red 
      ],
      lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
          title: {
                y: -70
          },
            labels: {
                y: 10
            }        
      },
        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -40,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    // The speed gauge
    $('#container-goodtraffic').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
              text: ''
          }       
      },
  
      credits: {
        enabled: false
      },
  
      series: [{
          name: 'GoodTraffic',
          data: [traffic],
          dataLabels: {
              format:
                  '<div style="text-align:center">' +
                  '<span style="font-size:25px">{y}%</span><br/>' +
                  '<span style="font-size:12px;opacity:0.4">Good</span>' +
                  '</div>'
          },
          tooltip: {
              valueSuffix: ' %'
          }
      }]
  
    }));
  }