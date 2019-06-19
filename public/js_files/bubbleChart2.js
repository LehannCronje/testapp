// var DATA_COUNT = 16;
// 		var MIN_XY = -150;
// 		var MAX_XY = 100;

// 		var utils = Samples.utils;

// 		utils.srand(110);

// 		function colorize1(opaque, context) {
// 			var value = context.dataset.data[context.dataIndex];
// 			var x = value.x / 100;
// 			var y = value.y / 100;
// 			var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
// 			var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
// 			var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
// 			var a = opaque ? 1 : 0.5 * value.v / 1000;

// 			return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
// 		}

// 		function generateData2() {
// 			var data = [];
// 			var i;

// 			for (i = 0; i < DATA_COUNT; ++i) {
// 				data.push({
// 					x: utils.rand(MIN_XY, MAX_XY),
// 					y: utils.rand(MIN_XY, MAX_XY),
// 					v: utils.rand(0, 1000)
// 				});
// 			}

// 			return data;
// 		}

// 		var data1 = {
// 			datasets: [{
// 				data: generateData2()
// 			}, {
// 				data: generateData2()
// 			}]
// 		};

// 		var options1 = {
// 			aspectRatio: 1,
// 			legend: false,
// 			tooltips: false,

// 			elements: {
// 				point: {
// 					backgroundColor: colorize.bind(null, false),

// 					borderColor: colorize.bind(null, true),

// 					borderWidth: function(context) {
// 						return Math.min(Math.max(1, context.datasetIndex + 1), 8);
// 					},

// 					hoverBackgroundColor: 'transparent',

// 					hoverBorderColor: function(context) {
// 						return utils.color(context.datasetIndex);
// 					},

// 					hoverBorderWidth: function(context) {
// 						var value = context.dataset.data[context.dataIndex];
// 						return Math.round(8 * value.v / 1000);
// 					},

// 					radius: function(context) {
// 						var value = context.dataset.data[context.dataIndex];
// 						var size = context.chart.width;
// 						var base = Math.abs(value.v) / 1000;
// 						return (size / 24) * base;
// 					}
// 				}
// 			}
// 		};

// 		var chart = new Chart('chart-1', {
// 			type: 'bubble',
// 			data: data1,
// 			options: options1
// 		});

// 		// eslint-disable-next-line no-unused-vars
// 		function randomize1() {
// 			chart.data.datasets.forEach(function(dataset) {
// 				dataset.data = generateData2();
// 			});
// 			chart.update();
// 		}

// 		// eslint-disable-next-line no-unused-vars
// 		function addDataset1() {
// 			chart.data.datasets.push({
// 				data: generateData2()
// 			});
// 			chart.update();
// 		}

// 		// eslint-disable-next-line no-unused-vars
// 		function removeDataset1() {
// 			chart.data.datasets.shift();
// 			chart.update();
//         }