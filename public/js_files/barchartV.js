var DataArray =
[
	['2015', 'March', 'import', 0],
	['2015', 'March', 'import', 0],
	['2015', 'March', 'import', 58200368],
	['2015', 'April', 'import', 28549589],
	['2015', 'May', 'import', 48814896],
	['2015', 'June', 'import', 26580294],
	['2015', 'July', 'import', 24293499],
	['2015', 'August', 'import', 35063958],
	['2015', 'September', 'import', 36083344],
	['2015', 'October', 'import', 29962966],
	['2015', 'November', 'import', 27010608],
	['2015', 'December', 'import', 31576496],
	['2016', 'March', 'import', 223232323],
	['2016', 'March', 'import', 23232323],
	['2016', 'March', 'import', 58200368],
	['2016', 'April', 'import', 28549589],
	['2016', 'May', 'import', 48814896],
	['2016', 'June', 'import', 26580294],
	['2016', 'July', 'import', 24293499],
	['2016', 'August', 'import', 35063958],
	['2016', 'September', 'import', 36083344],
	['2016', 'October', 'import', 29962966],
	['2016', 'November', 'import', 27010608],
	['2016', 'December', 'import', 31576496],
	['2016', 'March', 'export', 223232323],
	['2016', 'March', 'export', 23232323],
	['2016', 'March', 'export', 58200368],
	['2016', 'April', 'export', 28549589],
	['2016', 'May', 'export', 48814896],
	['2016', 'June', 'export', 26580294],
	['2016', 'July', 'export', 24293499],
	['2016', 'August', 'export', 35063958],
	['2016', 'September', 'export', 36083344],
	['2016', 'October', 'export', 29962966],
	['2016', 'November', 'export', 27010608],
	['2016', 'December', 'export', 31576496],	
]
var data_2015 = [];

for(var i=0;i<DataArray.length;i++){
	if(DataArray[i][0]=='2015'){
		data_2015[i] = DataArray[i][3];
	}
};
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Imports',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: data_2015
			}, {
				label: 'Exports',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				borderWidth: 1,
				data: [
					10,
					20,
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

		};

		

		document.getElementById('randomizeData').addEventListener('click', function() {
			// var zero = Math.random() < 0.2 ? true : false;
			// barChartData.datasets.forEach(function(dataset) {
			// 	dataset.data = dataset.data.map(function() {
			// 		return zero ? 0.0 : randomScalingFactor();
			// 	});

			// });
			var t=0;
			var data_2016 = []
			for(var i=0;i<DataArray.length;i++){
				if(DataArray[i][0] == '2016'){
					data_2016[t] = DataArray[i][3];
					console.log(DataArray[i][3]);
					t++;
				}
			}
			barChartData.datasets[0].data = data_2016;
			window.myBar.update();
		});

		var colorNames = Object.keys(window.chartColors);
		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[barChartData.datasets.length % colorNames.length];
			var dsColor = window.chartColors[colorName];
			var newDataset = {
				label: 'Dataset ' + (barChartData.datasets.length + 1),
				backgroundColor: color(dsColor).alpha(0.5).rgbString(),
				borderColor: dsColor,
				borderWidth: 1,
				data: []
			};

			for (var index = 0; index < barChartData.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());
			}

			barChartData.datasets.push(newDataset);
			window.myBar.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (barChartData.datasets.length > 0) {
				var month = MONTHS[barChartData.labels.length % MONTHS.length];
				barChartData.labels.push(month);

				for (var index = 0; index < barChartData.datasets.length; ++index) {
					// window.myBar.addData(randomScalingFactor(), index);
					barChartData.datasets[index].data.push(randomScalingFactor());
				}

				window.myBar.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			barChartData.datasets.pop();
			window.myBar.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			barChartData.labels.splice(-1, 1); // remove the label first

			barChartData.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myBar.update();
        });
        
        function loadBarChart(){
            var ctx = document.getElementById('canvas').getContext('2d');
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
						position: 'bottom',
						labels: {
							
						},
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    }
                }
            });
        }
        