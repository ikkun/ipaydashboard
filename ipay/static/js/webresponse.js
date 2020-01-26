//Web Session   
function webresponsestatus(response){
	
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
            [0.2, '#55BF3B'], // green
            [0.7, '#DDDF0D'], // yellow   
            [0.8, '#DF5353'], // red
            // [0.5, '#DDDF0D'], // yellow          
            
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
    $('#container-webresponse').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 10,
          title: {
              text: ''
          }       
      },
  
      credits: {
        enabled: false
      },
  
      series: [{
          name: 'WebResponse',
          data: [response],
          dataLabels: {
              format:
                  '<div style="text-align:center">' +
                  '<span style="font-size:20px">{y}</span><br/>' +
                  '<span style="font-size:12px;opacity:0.4">second</span>' +
                  '</div>'
          },
          tooltip: {
              valueSuffix: ' %'
          }
      }]
  
  }));
  };