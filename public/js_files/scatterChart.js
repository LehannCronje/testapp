var color = Chart.helpers.color;
		function generateData1() {
			var data = [];
			for (var i = 0; i < 7; i++) {
				data.push({
					x: randomScalingFactor(),
					y: randomScalingFactor()
				});
			}
			return data;
		}

		var scatterChartData = {
			datasets: [{
				label: 'My First dataset',
				borderColor: window.chartColors.red,
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				data: generateData1()
			}, {
				label: 'My Second dataset',
				borderColor: window.chartColors.blue,
				backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
				data: generateData1()
			}]
		};


		document.getElementById('randomizeData').addEventListener('click', function() {
			scatterChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return {
						x: randomScalingFactor(),
						y: randomScalingFactor()
					};
				});
			});
			window.myScatter.update();
        });
        
        function loadScatterChart(){
            var ctx = document.getElementById('canvas3').getContext('2d');
			window.myScatter = Chart.Scatter(ctx, {
				data: scatterChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Scatter Chart'
					},
				}
			});
        }
        function loadScaterChart2(){
            function loadScatterChart(){
                var ctx = document.getElementById('canvas4').getContext('2d');
                window.myScatter = Chart.Scatter(ctx, {
                    data: scatterChartData,
                    options: {
                        title: {
                            display: true,
                            text: 'Chart.js Scatter Chart'
                        },
                    }
                });
            }
        }